import { useEffect, useState } from 'react';
import { collection, doc, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '../firebase';
import { defaultWorks, sortWorks } from '../data/defaultWorks';

const mergeWithDefaults = (remoteWorks) => {
  const worksById = new Map(defaultWorks.map((work) => [work.id, work]));
  remoteWorks.forEach((work) => worksById.set(work.id, work));
  return sortWorks([...worksById.values()]);
};

export default function useWorks() {
  const [remoteWorks, setRemoteWorks] = useState([]);
  const [catalogManaged, setCatalogManaged] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let configReady = false;
    let worksReady = false;
    const finishLoading = () => {
      if (configReady && worksReady) setLoading(false);
    };

    const unsubscribeConfig = onSnapshot(
      doc(db, 'site', 'config'),
      (snapshot) => {
        setCatalogManaged(snapshot.exists() && snapshot.data().catalogManaged === true);
        configReady = true;
        finishLoading();
      },
      () => {
        configReady = true;
        finishLoading();
      }
    );

    const publishedWorks = query(collection(db, 'works'), where('published', '==', true));
    const unsubscribeWorks = onSnapshot(
      publishedWorks,
      (snapshot) => {
        setRemoteWorks(snapshot.docs.map((work) => ({ id: work.id, ...work.data() })));
        worksReady = true;
        finishLoading();
      },
      () => {
        worksReady = true;
        finishLoading();
      }
    );

    return () => {
      unsubscribeConfig();
      unsubscribeWorks();
    };
  }, []);

  const works = catalogManaged ? sortWorks(remoteWorks) : mergeWithDefaults(remoteWorks);
  return { works, loading };
}
