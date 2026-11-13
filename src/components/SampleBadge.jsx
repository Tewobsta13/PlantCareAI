import Icon from './Icon';

/** Marks content that is demo / sample data and must not be read as a real claim. */
export default function SampleBadge({ label = 'Sample', className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full border border-dashed border-outline bg-surface-container-lowest/80 text-on-surface-variant font-label-sm text-label-sm normal-case tracking-normal whitespace-nowrap ${className}`}
      title="Sample content — not real data"
    >
      <Icon name="science" size={12} />
      {label}
    </span>
  );
}
