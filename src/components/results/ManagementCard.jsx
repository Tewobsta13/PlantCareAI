import { useState } from 'react';
import Icon from '../Icon';

const TABS = [
  { id: 'cultural', label: 'Cultural & Organic', badge: 'bg-secondary text-on-secondary', mark: (i) => i + 1 },
  {
    id: 'chemical',
    label: 'Chemical / Conventional',
    badge: 'bg-primary-container text-on-primary',
    mark: (i) => String.fromCharCode(65 + i),
  },
];

export default function ManagementCard({ management }) {
  const [active, setActive] = useState('cultural');
  const tab = TABS.find((t) => t.id === active);
  return (
    <div className="bg-surface-container-lowest rounded-xl p-space-md md:p-space-lg shadow-sm flex flex-col gap-space-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-xs text-primary-container">
          <Icon name="healing" size={22} className="text-secondary" />
          <h2 className="font-headline-sm text-headline-sm font-semibold">Illustrative Management Notes</h2>
        </div>
        <div
          role="tablist"
          aria-label="Management type"
          className="inline-flex p-1 bg-surface-container rounded-lg self-start sm:self-auto"
        >
          {TABS.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              id={`mgmt-tab-${t.id}`}
              aria-selected={t.id === active}
              aria-controls="mgmt-panel"
              onClick={() => setActive(t.id)}
              className={`px-3 py-1 text-label-md font-label-md rounded font-semibold transition-all ${t.id === active ? 'bg-surface-container-lowest text-primary-container shadow-xs' : 'text-on-surface-variant hover:text-on-surface'}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>
      <div role="tabpanel" id="mgmt-panel" aria-labelledby={`mgmt-tab-${active}`} className="flex flex-col gap-space-sm">
        {management[active].map((s, i) => (
          <div key={s.title} className="flex items-start gap-space-sm p-space-sm bg-surface-container-low rounded-lg">
            <span className={`w-6 h-6 rounded-full ${tab.badge} flex items-center justify-center font-bold text-xs shrink-0 mt-0.5`}>
              {tab.mark(i)}
            </span>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-primary-container font-semibold">{s.title}</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{s.text}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
        General, illustrative guidance only. No products, rates or schedules are recommended. Confirm with a qualified local agronomist.
      </p>
    </div>
  );
}
