import { useState } from 'react';
import { images } from '../../assets/images';
import Icon from '../Icon';
import SampleBadge from '../SampleBadge';
import { SPOTLIGHTS } from '../../data/home';

const tabBase = 'px-space-md py-space-xs rounded-lg font-label-md text-label-md whitespace-nowrap transition-colors';
const tabActive = 'bg-secondary text-on-secondary shadow-sm';
const tabIdle = 'text-on-surface-variant hover:bg-surface-container-high';

export default function DiseaseSpotlights() {
  const [activeId, setActiveId] = useState(SPOTLIGHTS[0].id);
  const active = SPOTLIGHTS.find((s) => s.id === activeId);

  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile sm:px-margin py-space-2xl">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-md mb-space-xl">
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-md text-label-md text-secondary uppercase tracking-wider font-semibold">Pathology Compendium</span>
          <h2 className="font-headline-xl-mobile sm:font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-primary">
            Educational Disease Spotlights
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Foliar symptoms, microscopic signatures, and illustrative agronomic management notes.
          </p>
        </div>
        <div
          role="tablist"
          aria-label="Disease spotlights"
          className="flex items-center gap-1 p-1 bg-surface-container rounded-xl overflow-x-auto"
        >
          {SPOTLIGHTS.map((s) => (
            <button
              key={s.id}
              role="tab"
              id={`spotlight-tab-${s.id}`}
              aria-selected={s.id === activeId}
              aria-controls="spotlight-panel"
              type="button"
              onClick={() => setActiveId(s.id)}
              className={`${tabBase} ${s.id === activeId ? tabActive : tabIdle}`}
            >
              {s.tab}
            </button>
          ))}
        </div>
      </div>
      <div className="bg-surface-container-lowest rounded-2xl p-space-md sm:p-space-xl shadow-md">
        <div
          role="tabpanel"
          id="spotlight-panel"
          aria-labelledby={`spotlight-tab-${active.id}`}
          className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center"
        >
          <div className="lg:col-span-5 rounded-xl overflow-hidden bg-surface-container h-80 relative">
            <img src={images[active.image]} alt={active.alt} className="w-full h-full object-cover" />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
              {active.badge}
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="font-headline-lg text-headline-lg text-primary">{active.title}</span>
              <span className="font-code-mono text-body-sm text-on-surface-variant">{active.taxon}</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant">{active.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md bg-surface-container-low p-space-md rounded-xl">
              {active.boxes.map((b) => (
                <div key={b.label} className="flex flex-col gap-1">
                  <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">{b.label}</span>
                  <p className="font-body-sm text-body-sm text-on-surface">{b.text}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <span className="inline-flex items-center gap-1 font-label-md text-label-md text-primary font-semibold">
                <Icon name="check_circle" size={18} className="text-secondary" /> {active.rate} Recognition Rate
                <SampleBadge />
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">{active.note}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
