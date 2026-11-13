import Icon from '../Icon';
import { SAMPLES } from '../../data/samples';

export default function SampleSelector({ activeId, onSelect, disabled }) {
  return (
    <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm mb-space-xl flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-sm">
        <Icon name="science" size={20} className="text-secondary" />
        <span className="font-label-lg text-label-lg text-primary-container font-semibold">Or try a built-in demo specimen:</span>
      </div>
      <div className="flex flex-wrap items-center gap-space-sm">
        {SAMPLES.map((s) => {
          const active = s.id === activeId;
          return (
            <button
              key={s.id}
              type="button"
              disabled={disabled}
              aria-pressed={active}
              onClick={() => onSelect(s.id)}
              className={`inline-flex items-center gap-2 px-space-md py-space-xs rounded-full font-label-md text-label-md shadow-sm transition-all disabled:opacity-60 ${
                active
                  ? 'bg-secondary text-on-secondary'
                  : 'bg-surface-container-lowest text-primary-container hover:bg-secondary-container hover:text-on-secondary-container'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${s.dot}`}></span> {s.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
