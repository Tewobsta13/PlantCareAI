// Site-wide content. Keeping copy here means the layout components stay presentational.

export const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'Detect Disease', to: '/detect' },
  { label: 'Results Demo', to: '/results' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Disease Library', to: '/library' },
];

// Placeholder identity shown in the header and dashboard greeting (from the Stitch design).
export const DEMO_USER = {
  name: 'Dr. Elena Vance',
  role: 'Lead Agronomist',
};

export const FOOTER_BLURB =
  'Empowering agronomists, commercial greenhouses, and agricultural researchers with real-time neural diagnostics, spectral leaf telemetry, and pathogen management protocols.';

// `to` = real route. Entries without `to` are placeholders that show a toast.
// `sample: true` marks columns whose entries are fictional / unverified in the demo build.
export const FOOTER_COLUMNS = [
  {
    title: 'Platform',
    links: [
      { label: 'Diagnostic Engine', to: '/detect' },
      { label: 'Disease Taxonomies', to: '/library' },
      { label: 'Drone & Spectral Sync' },
      { label: 'Canopy Telemetry', to: '/dashboard' },
    ],
  },
  {
    title: 'Research Partners',
    sample: true,
    links: [
      { label: 'Global Phytopathology Inst.' },
      { label: 'Botanical Genomics Consortium' },
      { label: 'Arid Soils Experimentation Lab' },
      { label: 'Peer-Reviewed Benchmarks' },
    ],
  },
  {
    title: 'Standards & Trust',
    sample: true,
    links: [
      { label: 'Standards Compliance' },
      { label: 'Data Governance & Ethics' },
      { label: 'Field Protocol Docs' },
      { label: 'Agronomic Advisory Board' },
    ],
  },
];

export const FOOTER_LEGAL_LINKS = ['Privacy Policy', 'Terms of Telemetry', 'Security Attestation'];

export const DEMO_NOTICE =
  'This is a frontend prototype. Every statistic, partner, certification, telemetry value and analysis result shown is sample content. No AI model is connected, and images you add are only previewed in your browser; they are not analyzed or uploaded.';
