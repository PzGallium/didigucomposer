import React, { useEffect, useMemo, useState } from 'react';
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  writeBatch,
} from 'firebase/firestore';
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { auth, db, storage } from '../firebase';
import { defaultWorks, formatWorkTitle, sortWorks } from '../data/defaultWorks';
import './Admin.css';

const ADMIN_EMAILS = [
  'zijia.pan@gmail.com',
  'didi.gu.519@gmail.com',
];
const MAX_AUDIO_SIZE = 100 * 1024 * 1024;

const emptyForm = {
  title: '',
  year: new Date().getFullYear(),
  subtitle: '',
  category: 'chamber',
  description: '',
  order: 10,
  link: '',
  published: true,
  audioUrl: '',
  audioPath: '',
  audioType: '',
};

const getFriendlyError = (error) => {
  const message = error?.message || '';
  if (message.includes('does not exist') || error?.code === 'failed-precondition') {
    return 'Cloud Firestore has not been created yet. Create the database in Firebase Console, then reload this page.';
  }
  if (error?.code === 'permission-denied') {
    return 'Permission denied. Publish the Firestore and Storage security rules, then try again.';
  }
  return message || 'Something went wrong. Please try again.';
};

const uploadRecording = (workId, file, setProgress) =>
  new Promise((resolve, reject) => {
    const safeName = file.name
      .toLowerCase()
      .replace(/[^a-z0-9.-]+/g, '-')
      .replace(/^-+|-+$/g, '');
    const audioPath = `recordings/${workId}/${Date.now()}-${safeName || 'recording.mp3'}`;
    const uploadTask = uploadBytesResumable(ref(storage, audioPath), file, {
      contentType: 'audio/mpeg',
      cacheControl: 'public,max-age=31536000,immutable',
    });

    uploadTask.on(
      'state_changed',
      (snapshot) => setProgress(Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100)),
      reject,
      async () => {
        const audioUrl = await getDownloadURL(uploadTask.snapshot.ref);
        resolve({ audioUrl, audioPath, audioType: 'audio/mpeg' });
      }
    );
  });

const Admin = () => {
  const [user, setUser] = useState(null);
  const [authReady, setAuthReady] = useState(false);
  const [works, setWorks] = useState([]);
  const [catalogManaged, setCatalogManaged] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [audioFile, setAudioFile] = useState(null);
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

  const isAdmin = ADMIN_EMAILS.includes(user?.email) && user?.emailVerified;
  const editingWork = useMemo(
    () => works.find((work) => work.id === editingId),
    [editingId, works]
  );

  useEffect(() => onAuthStateChanged(auth, (nextUser) => {
    setUser(nextUser);
    setAuthReady(true);
  }), []);

  useEffect(() => {
    if (!isAdmin) return undefined;

    const unsubscribeWorks = onSnapshot(
      collection(db, 'works'),
      (snapshot) => {
        setWorks(sortWorks(snapshot.docs.map((item) => ({ id: item.id, ...item.data() }))));
      },
      (firebaseError) => setError(getFriendlyError(firebaseError))
    );
    const unsubscribeConfig = onSnapshot(
      doc(db, 'site', 'config'),
      (snapshot) => setCatalogManaged(snapshot.exists() && snapshot.data().catalogManaged === true),
      (firebaseError) => setError(getFriendlyError(firebaseError))
    );

    return () => {
      unsubscribeWorks();
      unsubscribeConfig();
    };
  }, [isAdmin]);

  const resetForm = () => {
    setForm({ ...emptyForm, year: new Date().getFullYear() });
    setEditingId(null);
    setAudioFile(null);
    setProgress(0);
  };

  const handleSignIn = async () => {
    setError('');
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });
      await signInWithPopup(auth, provider);
    } catch (firebaseError) {
      setError(getFriendlyError(firebaseError));
    }
  };

  const importCurrentCatalog = async () => {
    if (!window.confirm('Import the current website catalog into the admin dashboard?')) return;
    setBusy(true);
    setError('');
    setNotice('');
    try {
      const batch = writeBatch(db);
      defaultWorks.forEach(({ id, ...work }) => {
        batch.set(doc(db, 'works', id), {
          ...work,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
      });
      batch.set(doc(db, 'site', 'config'), {
        catalogManaged: true,
        updatedAt: serverTimestamp(),
      });
      await batch.commit();
      setNotice('The current catalog is now managed here.');
    } catch (firebaseError) {
      setError(getFriendlyError(firebaseError));
    } finally {
      setBusy(false);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({
      ...current,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleFileChange = (event) => {
    const file = event.target.files?.[0] || null;
    setError('');
    if (!file) {
      setAudioFile(null);
      return;
    }
    if (!file.name.toLowerCase().endsWith('.mp3')) {
      setError('Please choose an MP3 file.');
      event.target.value = '';
      return;
    }
    if (file.size > MAX_AUDIO_SIZE) {
      setError('The MP3 file must be smaller than 100 MB.');
      event.target.value = '';
      return;
    }
    setAudioFile(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setBusy(true);
    setProgress(0);
    setError('');
    setNotice('');

    let newAudio = null;
    try {
      const workReference = editingId
        ? doc(db, 'works', editingId)
        : doc(collection(db, 'works'));

      if (audioFile) newAudio = await uploadRecording(workReference.id, audioFile, setProgress);

      const audio = newAudio || {
        audioUrl: form.audioUrl || '',
        audioPath: form.audioPath || '',
        audioType: form.audioType || '',
      };
      const work = {
        title: form.title.trim(),
        year: Number(form.year),
        subtitle: form.subtitle.trim(),
        category: form.category,
        description: form.description.trim(),
        order: Number(form.order) || 0,
        link: form.link.trim(),
        linkLabel: form.link.trim() ? 'Watch' : '',
        published: form.published,
        ...audio,
        updatedAt: serverTimestamp(),
      };
      if (!editingId) work.createdAt = serverTimestamp();

      await setDoc(workReference, work, { merge: Boolean(editingId) });

      if (newAudio && editingWork?.audioPath && editingWork.audioPath !== newAudio.audioPath) {
        deleteObject(ref(storage, editingWork.audioPath)).catch(() => {});
      }

      setNotice(editingId ? 'Work updated.' : 'Work published.');
      resetForm();
    } catch (firebaseError) {
      if (newAudio?.audioPath) deleteObject(ref(storage, newAudio.audioPath)).catch(() => {});
      setError(getFriendlyError(firebaseError));
    } finally {
      setBusy(false);
    }
  };

  const editWork = (work) => {
    setEditingId(work.id);
    setAudioFile(null);
    setForm({
      title: work.title || '',
      year: work.year || new Date().getFullYear(),
      subtitle: work.subtitle || '',
      category: work.category || 'chamber',
      description: work.description || '',
      order: work.order ?? 10,
      link: work.link || '',
      published: work.published !== false,
      audioUrl: work.audioUrl || '',
      audioPath: work.audioPath || '',
      audioType: work.audioType || '',
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const removeWork = async (work) => {
    if (!window.confirm(`Delete “${formatWorkTitle(work)}” and its uploaded recording?`)) return;
    setBusy(true);
    setError('');
    try {
      await deleteDoc(doc(db, 'works', work.id));
      if (work.audioPath) await deleteObject(ref(storage, work.audioPath)).catch(() => {});
      if (editingId === work.id) resetForm();
      setNotice('Work deleted.');
    } catch (firebaseError) {
      setError(getFriendlyError(firebaseError));
    } finally {
      setBusy(false);
    }
  };

  if (!authReady) return <div className="page admin-page"><div className="container"><p>Loading…</p></div></div>;

  if (!user) {
    return (
      <div className="page admin-page">
        <div className="container admin-login-wrap">
          <section className="admin-login-card">
            <p className="page-kicker">Private dashboard</p>
            <h1>Manage works</h1>
            <p>Sign in with the authorized Google account to publish recordings and update work information.</p>
            {error && <p className="admin-message admin-message--error">{error}</p>}
            <button type="button" className="btn btn-primary" onClick={handleSignIn}>Sign in with Google</button>
          </section>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="page admin-page">
        <div className="container admin-login-wrap">
          <section className="admin-login-card">
            <h1>Access denied</h1>
            <p>This Google account is not authorized to manage the website.</p>
            <button type="button" className="btn btn-secondary" onClick={() => signOut(auth)}>Sign out</button>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="page admin-page">
      <div className="container">
        <header className="admin-header">
          <div>
            <p className="page-kicker">Private dashboard</p>
            <h1>Manage works</h1>
            <p className="admin-header-copy">Add work information, upload an MP3, and publish it directly to the Works page.</p>
          </div>
          <button type="button" className="btn btn-secondary" onClick={() => signOut(auth)}>Sign out</button>
        </header>

        {error && <p className="admin-message admin-message--error">{error}</p>}
        {notice && <p className="admin-message admin-message--success">{notice}</p>}

        {!catalogManaged && (
          <section className="admin-setup-card">
            <div>
              <h2>Set up the catalog</h2>
              <p>Import the works already on the website so every item can be edited here.</p>
            </div>
            <button type="button" className="btn btn-primary" disabled={busy} onClick={importCurrentCatalog}>
              Import current works
            </button>
          </section>
        )}

        <div className="admin-layout">
          <section className="admin-panel">
            <div className="admin-panel-heading">
              <h2>{editingId ? 'Edit work' : 'Add a work'}</h2>
              {editingId && <button type="button" className="admin-text-button" onClick={resetForm}>Cancel</button>}
            </div>
            <form className="admin-form" onSubmit={handleSubmit}>
              <label>Title<input name="title" value={form.title} onChange={handleChange} required /></label>
              <div className="admin-form-row">
                <label>Year<input name="year" type="number" min="1900" max="2100" value={form.year} onChange={handleChange} required /></label>
                <label>Category<select name="category" value={form.category} onChange={handleChange}><option value="orchestral">Orchestral</option><option value="chamber">Chamber</option><option value="solo">Solo</option></select></label>
              </div>
              <label>Instrumentation<input name="subtitle" value={form.subtitle} onChange={handleChange} placeholder="For violin and piano." required /></label>
              <label>Description<textarea name="description" rows="4" value={form.description} onChange={handleChange} /></label>
              <div className="admin-form-row">
                <label>Display order<input name="order" type="number" min="0" value={form.order} onChange={handleChange} /></label>
                <label>Video URL<input name="link" type="url" value={form.link} onChange={handleChange} placeholder="Optional" /></label>
              </div>
              <label className="admin-file-field">MP3 recording<input type="file" accept="audio/mpeg,.mp3" onChange={handleFileChange} /><span>{audioFile?.name || (form.audioUrl ? 'Keep current recording, or choose a replacement' : 'Choose an MP3 up to 100 MB')}</span></label>
              <label className="admin-checkbox"><input name="published" type="checkbox" checked={form.published} onChange={handleChange} />Published</label>
              {busy && progress > 0 && <div className="admin-progress"><span style={{ width: `${progress}%` }} /></div>}
              <button className="btn btn-primary" type="submit" disabled={busy}>{busy ? 'Saving…' : editingId ? 'Save changes' : 'Publish work'}</button>
            </form>
          </section>

          <section className="admin-panel">
            <div className="admin-panel-heading"><h2>Catalog</h2><span>{works.length} works</span></div>
            <div className="admin-work-list">
              {works.length === 0 && <p className="admin-empty">Import the current catalog or add the first work.</p>}
              {works.map((work) => (
                <article className="admin-work-item" key={work.id}>
                  <div>
                    <span className="admin-work-category">{work.category}</span>
                    <h3>{formatWorkTitle(work)}</h3>
                    <p>{work.subtitle}</p>
                    <span className={`admin-status${work.published ? '' : ' admin-status--draft'}`}>{work.published ? 'Published' : 'Hidden'}{work.audioUrl ? ' · Recording' : ''}</span>
                  </div>
                  <div className="admin-work-actions">
                    <button type="button" onClick={() => editWork(work)}>Edit</button>
                    <button type="button" className="admin-delete-button" onClick={() => removeWork(work)} disabled={busy}>Delete</button>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Admin;
