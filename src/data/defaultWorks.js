export const storageAudioUrl = (fileName) =>
  `https://firebasestorage.googleapis.com/v0/b/didigucomposer.firebasestorage.app/o/${encodeURIComponent(fileName)}?alt=media`;

export const defaultWorks = [
  { id: 'there-blurred-2025', title: 'There, Blurred', year: 2025, category: 'orchestral', order: 10, subtitle: 'For accordion and orchestra.', description: '', link: 'https://youtu.be/xzfFH4jBfHk?si=nu1_AJ1WxTltUC4q', linkLabel: 'Watch on YouTube', published: true },
  { id: '4-studies-2026', title: '4 Studies', year: 2026, category: 'chamber', order: 10, subtitle: 'For clarinet, violin, cello, and piano.', description: '', published: true },
  { id: 'undercurrent-2025', title: 'Undercurrent', year: 2025, category: 'chamber', order: 20, subtitle: 'For violin, piano, and dance.', description: '', published: true },
  { id: 'earth-knows-2025', title: 'Earth knows', year: 2025, category: 'chamber', order: 30, subtitle: "For alto flute, viola d'amore, organ, and percussion.", description: '', published: true },
  { id: 'washerwoman-2025', title: 'Washerwoman', year: 2025, category: 'chamber', order: 40, subtitle: 'For clarinet, violin, cello, and piano.', description: '', audioUrl: storageAudioUrl('Didi Gu – Washerwoman.mp3'), audioPath: 'Didi Gu – Washerwoman.mp3', audioType: 'audio/mpeg', published: true },
  { id: 'where-quiet-lives-gather-2025', title: 'Where Quiet Lives Gather', year: 2025, category: 'chamber', order: 50, subtitle: 'For soprano, flute, clarinet, violin, cello, percussion, and piano.', description: '', audioUrl: storageAudioUrl('Gu - Where Quiet Lives Gather.wav'), audioPath: 'Gu - Where Quiet Lives Gather.wav', audioType: 'audio/wav', published: true },
  { id: 'aiws-2024', title: 'AIWS', year: 2024, category: 'chamber', order: 60, subtitle: 'For string quartet.', description: '', audioUrl: storageAudioUrl('071324_Mivos-DidiGu-AIWS.wav'), audioPath: '071324_Mivos-DidiGu-AIWS.wav', audioType: 'audio/wav', published: true },
  { id: 'rivulet-2024', title: 'Rivulet', year: 2024, category: 'chamber', order: 70, subtitle: 'For flute, bass clarinet, alto saxophone, piano, percussion, violin, cello, and double bass.', description: '', published: true },
  { id: 'spores-2024', title: 'spORes', year: 2024, category: 'chamber', order: 80, subtitle: 'For oboe, clarinet, bassoon, french horn, trumpet, violin, viola, cello, and double bass.', description: '', link: 'https://youtu.be/teK5ZKA61OI?si=ACOjW0KwUa6gA1od', linkLabel: 'Watch', published: true },
  { id: 'ci-cycle-2022', title: 'Ci Cycle', year: 2022, category: 'chamber', order: 90, subtitle: 'For flute, bassoon, violin, viola, and cello.', description: '', published: true },
  { id: 'a-die-that-never-stops-rolling-2022', title: 'A Die that Never Stops Rolling', year: 2022, category: 'chamber', order: 100, subtitle: 'For viola, piano, and percussion.', description: '', published: true },
  { id: 'unknown-emotion-2018', title: 'Unknown emotion', year: 2018, category: 'chamber', order: 110, subtitle: 'For clarinet, violin, cello, and piano.', description: '', published: true },
  { id: 'sonder-2025', title: 'Sonder', year: 2025, category: 'solo', order: 10, subtitle: 'For marimba.', description: '', published: true },
  { id: 'a-portrait-a-relic-and-a-green-striped-dress-2022', title: 'A Portrait, a Relic and a Green Striped Dress', year: 2022, category: 'solo', order: 20, subtitle: 'For flute.', description: '', published: true },
];

export const formatWorkTitle = (work) =>
  work.year ? `${work.title} (${work.year})` : work.title;

export const sortWorks = (works) =>
  [...works].sort((a, b) => {
    const categoryOrder = { orchestral: 0, chamber: 1, solo: 2 };
    const categoryDifference = (categoryOrder[a.category] ?? 99) - (categoryOrder[b.category] ?? 99);
    if (categoryDifference !== 0) return categoryDifference;
    if ((a.order ?? 0) !== (b.order ?? 0)) return (a.order ?? 0) - (b.order ?? 0);
    if ((a.year ?? 0) !== (b.year ?? 0)) return (b.year ?? 0) - (a.year ?? 0);
    return a.title.localeCompare(b.title);
  });
