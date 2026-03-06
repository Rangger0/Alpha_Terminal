export type ProjectCategory = 'Finance' | 'Airdrop' | 'Intelligence' | 'Infrastructure';
export type ProjectStatus = 'Live' | 'Building' | 'Roadmap';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  nodeId: string;
  name: string;
  shortName: string;
  category: ProjectCategory;
  status: ProjectStatus;
  description: string;
  summary: string;
  link?: string;
  accent: string;
  coverLabel: string;
  coverStats: ProjectMetric[];
  stack: string[];
  readme: string[];
  roadmap: string[];
}

export interface RoadmapPhase {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export const projects: Project[] = [
  {
    id: 'alpha-capital',
    nodeId: 'NODE 01',
    name: 'Alpha Capital',
    shortName: 'Capital OS',
    category: 'Finance',
    status: 'Live',
    description:
      'Private capital desk untuk balance tracking, cashflow notes, dan review portofolio tanpa kehilangan feel seperti operator console.',
    summary: 'Mengubah catatan modal yang berantakan menjadi cockpit keuangan yang tajam dan enak dipakai harian.',
    link: 'https://alpha-capital-one.vercel.app/login',
    accent: '#f5c26b',
    coverLabel: 'finance.notes / private',
    coverStats: [
      { label: 'Mode', value: 'Balance log' },
      { label: 'Focus', value: 'Capital rules' },
      { label: 'Review', value: 'Weekly recap' },
    ],
    stack: ['React', 'TypeScript', 'Tailwind', 'Private journaling'],
    readme: [
      'Menyatukan saldo, arus kas, dan thesis note dalam satu panel.',
      'Membuat biaya bridge, gas, dan eksekusi airdrop lebih terlihat.',
      'Didesain untuk ritme review harian, bukan spreadsheet fatigue.',
    ],
    roadmap: [
      'Tambah import wallet untuk rekonsiliasi yang lebih cepat.',
      'Bangun snapshot profit bulanan dan card performance.',
      'Rilis export singkat untuk evaluasi mingguan.',
    ],
  },
  {
    id: 'alpha-tracker',
    nodeId: 'NODE 02',
    name: 'Alpha Tracker',
    shortName: 'Claim Radar',
    category: 'Airdrop',
    status: 'Live',
    description:
      'Workspace intelijen airdrop untuk watchlist eligibility, quest cadence, dan claim readiness lintas chain.',
    summary: 'Tempat memetakan peluang airdrop sebelum kebanyakan orang sadar campaign-nya layak dikejar.',
    link: 'https://alpha-trecker.vercel.app/',
    accent: '#67e8f9',
    coverLabel: 'eligibility.watch / active',
    coverStats: [
      { label: 'Lens', value: 'Quest board' },
      { label: 'Risk', value: 'Sybil aware' },
      { label: 'Output', value: 'Claim ready' },
    ],
    stack: ['React', 'Vite', 'Signal tagging', 'Wallet workflows'],
    readme: [
      'Menjaga daftar campaign, task cadence, dan progress eligibility tetap rapi.',
      'Memisahkan noise dari peluang yang benar-benar layak dieksekusi.',
      'Dibuat untuk operator yang butuh sinyal cepat tanpa kehilangan konteks.',
    ],
    roadmap: [
      'Tambah campaign scoring berdasarkan cost, effort, dan upside.',
      'Susun timeline snapshot agar momentum tidak terlewat.',
      'Tambahkan notifikasi untuk status claim dan vesting.',
    ],
  },
  {
    id: 'alpha-ledger',
    nodeId: 'NODE 03',
    name: 'Alpha Ledger',
    shortName: 'Journal Layer',
    category: 'Finance',
    status: 'Building',
    description:
      'Finance note system premium untuk jurnal modal, ruleset eksekusi, dan accountability bulanan yang lebih privat.',
    summary: 'Lapisan catatan keuangan yang fokus pada disiplin, memori keputusan, dan review periodik.',
    accent: '#8ad28e',
    coverLabel: 'journal.first / in-build',
    coverStats: [
      { label: 'Log', value: 'Daily PnL' },
      { label: 'Scope', value: 'Rules + notes' },
      { label: 'Privacy', value: 'Owner only' },
    ],
    stack: ['Structured notes', 'Tagging', 'Review cadence', 'Personal analytics'],
    readme: [
      'Menangkap alasan di balik setiap keputusan modal, bukan cuma angkanya.',
      'Menyimpan template review agar evaluasi bulanan konsisten.',
      'Diarahkan untuk jadi pasangan private dari Alpha Capital.',
    ],
    roadmap: [
      'Tambah monthly prompts untuk review performa.',
      'Hubungkan note dengan kategori biaya airdrop.',
      'Buat mode printable untuk arsip keputusan.',
    ],
  },
  {
    id: 'alpha-signal',
    nodeId: 'NODE 04',
    name: 'Alpha Signal',
    shortName: 'Research Desk',
    category: 'Intelligence',
    status: 'Building',
    description:
      'Research desk untuk scoring ecosystem, mapping narrative, dan prioritas campaign sebelum masuk watchlist aktif.',
    summary: 'Memadatkan riset Web3 menjadi decision layer yang lebih cepat dibaca dan dieksekusi.',
    accent: '#7aa2ff',
    coverLabel: 'research.map / layered',
    coverStats: [
      { label: 'Input', value: 'Narrative map' },
      { label: 'Rank', value: 'Signal score' },
      { label: 'Sync', value: 'Tracker ready' },
    ],
    stack: ['Research schema', 'Signal scoring', 'Notes system', 'Priority ranking'],
    readme: [
      'Menyaring narrative, ecosystem motion, dan campaign quality di satu tempat.',
      'Membantu memutuskan campaign mana yang layak dikerjakan lebih dulu.',
      'Disiapkan sebagai jembatan antara riset manual dan eksekusi di tracker.',
    ],
    roadmap: [
      'Tambah scoring matrix untuk narrative strength.',
      'Bangun template ecosystem snapshot mingguan.',
      'Sinkronkan shortlist langsung ke Alpha Tracker.',
    ],
  },
  {
    id: 'alpha-vault',
    nodeId: 'NODE 05',
    name: 'Alpha Vault',
    shortName: 'Wallet Guard',
    category: 'Infrastructure',
    status: 'Roadmap',
    description:
      'Layer infrastruktur untuk segmentasi wallet, hygiene operasional, dan risk control supaya eksekusi tetap aman.',
    summary: 'Sistem perlindungan operasional agar activity Web3 tidak berubah jadi chaos yang mahal.',
    accent: '#fb7185',
    coverLabel: 'ops.guard / planned',
    coverStats: [
      { label: 'Split', value: 'Wallet roles' },
      { label: 'Rule', value: 'Risk caps' },
      { label: 'Aim', value: 'Clean ops' },
    ],
    stack: ['Wallet segmentation', 'Process rules', 'Execution checklists', 'Risk controls'],
    readme: [
      'Menjaga pembagian wallet dan exposure tetap tertib.',
      'Menyusun SOP ringan sebelum interaksi bernilai tinggi.',
      'Dibangun untuk melindungi ritme eksekusi jangka panjang.',
    ],
    roadmap: [
      'Rancang dashboard wallet role dan notes.',
      'Tambah checklist pre-bridge dan pre-claim.',
      'Susun alert untuk limit exposure per wallet.',
    ],
  },
  {
    id: 'alpha-dispatch',
    nodeId: 'NODE 06',
    name: 'Alpha Dispatch',
    shortName: 'Release Room',
    category: 'Infrastructure',
    status: 'Roadmap',
    description:
      'Portal publik untuk release note, case study, dan laporan operator agar portfolio terasa hidup, bukan sekadar katalog.',
    summary: 'Ruang publik yang merangkum apa yang dibangun, apa yang dipelajari, dan apa yang akan dikirim berikutnya.',
    accent: '#cbd5f5',
    coverLabel: 'release.notes / public',
    coverStats: [
      { label: 'Format', value: 'Case study' },
      { label: 'Audience', value: 'Clients + peers' },
      { label: 'Role', value: 'Proof of work' },
    ],
    stack: ['Content system', 'Case studies', 'Release notes', 'Public changelog'],
    readme: [
      'Membuat portfolio terasa aktif karena ada dokumentasi shipping.',
      'Menunjukkan proses berpikir, bukan cuma tampilan akhir proyek.',
      'Dirancang untuk menguatkan brand Alpha Terminal sebagai operating portfolio.',
    ],
    roadmap: [
      'Tambah halaman changelog publik.',
      'Susun template study case per project.',
      'Hubungkan update ini ke halaman media.',
    ],
  },
];

export const roadmapPhases: RoadmapPhase[] = [
  {
    id: '01',
    title: 'Now',
    description: 'Memperkuat dua sistem live agar portfolio terasa nyata dan operasional.',
    items: [
      'Polish Alpha Capital untuk review modal yang lebih cepat.',
      'Tambahkan kualitas riset dan claim clarity di Alpha Tracker.',
      'Samakan bahasa desain seluruh ecosystem Alpha Terminal.',
    ],
  },
  {
    id: '02',
    title: 'Next',
    description: 'Menambah lapisan finance notes dan research intelligence.',
    items: [
      'Rilis Alpha Ledger sebagai private finance journal.',
      'Bangun Alpha Signal untuk scoring dan narrative mapping.',
      'Hubungkan research, tracking, dan note-taking lebih rapat.',
    ],
  },
  {
    id: '03',
    title: 'Later',
    description: 'Mendorong automation, release storytelling, dan operational safety.',
    items: [
      'Bangun Alpha Vault untuk workflow wallet yang lebih aman.',
      'Tambahkan Alpha Dispatch sebagai release room publik.',
      'Eksplor read-only sync dan report export untuk review mingguan.',
    ],
  },
];
