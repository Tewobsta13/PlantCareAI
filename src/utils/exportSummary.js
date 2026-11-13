/** Downloads the dashboard's SAMPLE monthly figures as CSV (real file, demo data). */
const ROWS = [
  ['Mar', 70, 15],
  ['Apr', 95, 22],
  ['May', 120, 30],
  ['Jun', 140, 45],
  ['Jul', 165, 58],
  ['Aug', 150, 52],
  ['Sep', 135, 42],
  ['Oct', 107, 38],
];

export function exportSummary() {
  const csv = [
    'month,healthy_scans,pathogen_scans,note',
    ...ROWS.map(([m, h, p], i) => `${m},${h},${p},${i === 0 ? 'SAMPLE DATA - not real telemetry' : ''}`),
  ].join('\n');
  const url = URL.createObjectURL(new Blob([csv], { type: 'text/csv' }));
  const a = Object.assign(document.createElement('a'), { href: url, download: 'plantcare-sample-summary.csv' });
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
