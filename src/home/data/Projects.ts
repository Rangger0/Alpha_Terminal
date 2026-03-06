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
      'Financial command center untuk memantau balance, income, expense, burn rate, dan savings ratio dalam satu dashboard yang tetap terasa seperti operator console.',
    summary: 'Dashboard keuangan pribadi yang merangkum transaksi, cashflow analysis, dan category breakdown supaya review modal lebih cepat dan lebih jelas.',
    link: 'https://alpha-capital-one.vercel.app/login',
    accent: '#f5c26b',
    coverLabel: 'financial.command / live',
    coverStats: [
      { label: 'Mode', value: 'Command dashboard' },
      { label: 'Focus', value: 'Cashflow review' },
      { label: 'Output', value: 'Expense clarity' },
    ],
    stack: ['React', 'TypeScript', 'Tailwind', 'Cashflow analytics'],
    readme: [
      'Merangkum total balance, income, expense, burn rate, dan savings ratio di satu overview.',
      'Menyediakan transaksi, calendar, dan report flow untuk review keuangan yang lebih terstruktur.',
      'Menjaga analisis cashflow dan top categories tetap cepat dibaca tanpa terasa seperti spreadsheet.',
    ],
    roadmap: [
      'Tambah import transaksi atau wallet untuk rekonsiliasi yang lebih cepat.',
      'Bangun snapshot profit bulanan dan breakdown kategori yang lebih detail.',
      'Rilis export report singkat untuk evaluasi mingguan.',
    ],
  },
  {
    id: 'alpha-tracker',
    nodeId: 'NODE 02',
    name: 'Alpha Tracker',
    shortName: 'Mission Control',
    category: 'Airdrop',
    status: 'Live',
    description:
      'Workspace mission control untuk operasional airdrop: priority board, ecosystem tracking, screening, dan tool execution dalam satu panel yang lebih tenang dibaca.',
    summary: 'Dashboard airdrop yang menyatukan project priority, ecosystem notes, screening, multi-account, dan reward workflow tanpa tab yang berantakan.',
    link: 'https://alpha-trecker.vercel.app/',
    accent: '#67e8f9',
    coverLabel: 'mission.control / active',
    coverStats: [
      { label: 'Lens', value: 'Priority board' },
      { label: 'Focus', value: 'Ecosystem ops' },
      { label: 'Output', value: 'Tool-ready' },
    ],
    stack: ['React', 'Vite', 'Airdrop workflows', 'Ops dashboard'],
    readme: [
      'Menyatukan priority, ecosystem, screening, dan reward vault dalam satu workspace operasional.',
      'Membuat quick links ke multi account, AI tools, swap & bridge, dan utilitas lain tetap gampang dijangkau.',
      'Didesain seperti panel mission control agar aktivitas airdrop lebih rapi, cepat dibaca, dan konsisten.',
    ],
    roadmap: [
      'Tambah scoring priority berdasarkan effort, upside, dan completion status.',
      'Susun reminder dan note layer per ecosystem agar konteks tidak tercecer.',
      'Tambahkan tracking reward dan workflow claim yang lebih detail.',
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
