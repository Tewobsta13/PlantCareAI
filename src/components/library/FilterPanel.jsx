import Icon from '../Icon';
import { CROPS, SEVERITY_TIERS } from '../../data/diseases';

const pill = 'px-space-md py-1.5 rounded-full font-label-md text-label-md transition-all shrink-0';

export default function FilterPanel({ query, setQuery, crop, setCrop, severity, setSeverity }) {
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md sm:p-space-lg shadow-sm flex flex-col gap-space-lg">
      <div className="relative w-full">
        <Icon name="search" size={22} className="absolute left-space-md top-1/2 -translate-y-1/2 text-outline" />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          aria-label="Search diseases"
          placeholder="Search diseases, symptoms, or pathogens (e.g., Alternaria, yellow halos, wilting, Passalora)..."
          className="w-full pl-12 pr-10 py-3.5 bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline focus:bg-surface-container-lowest focus:outline-none focus-visible:ring-2 focus-visible:ring-secondary transition-all [&::-webkit-search-cancel-button]:hidden"
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery('')}
            aria-label="Clear search"
            className="absolute right-space-md top-1/2 -translate-y-1/2 text-outline hover:text-on-surface"
          >
            <Icon name="close" size={18} />
          </button>
        )}
      </div>
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md pt-space-xs">
        <div className="flex items-center gap-space-xs overflow-x-auto pb-1 lg:pb-0" role="group" aria-label="Filter by crop">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mr-2 shrink-0">Crop:</span>
          {CROPS.map((c) => {
            const id = c === 'All Crops' ? 'all' : c.toLowerCase();
            const active = crop === id;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={active}
                onClick={() => setCrop(id)}
                className={`${pill} ${active ? 'bg-primary-container text-on-primary shadow-sm flex items-center gap-1.5' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}`}
              >
                {active && id !== 'all' && <span className="w-1.5 h-1.5 rounded-full bg-secondary-container"></span>}
                {c}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-space-xs overflow-x-auto pb-1 lg:pb-0" role="group" aria-label="Filter by severity">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mr-2 shrink-0">
            Pathology Tier:
          </span>
          {SEVERITY_TIERS.map((s) => {
            const active = severity === s.id;
            return (
              <button
                key={s.id}
                type="button"
                aria-pressed={active}
                onClick={() => setSeverity(s.id)}
                className={`px-3 py-1 rounded-lg font-label-sm text-label-sm transition-all shrink-0 flex items-center gap-1 ${active ? 'bg-primary-container text-on-primary' : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'}`}
              >
                {s.dot && <span className={`w-2 h-2 rounded-full ${s.id === 'moderate' ? 'bg-surface-tint' : s.dot}`}></span>}
                {s.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
