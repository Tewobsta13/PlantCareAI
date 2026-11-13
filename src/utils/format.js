export function formatBytes(bytes) {
  if (bytes == null) return '';
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
export const pct = (v, digits = 1) => `${(v * 100).toFixed(digits)}%`;
