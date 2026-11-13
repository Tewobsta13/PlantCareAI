import Icon from '../Icon';
import SampleBadge from '../SampleBadge';
import { DISEASES } from '../../data/diseases';

export function ContextBar() {
  return (
    <section className="w-full bg-surface-container-low px-margin-mobile sm:px-margin py-space-md">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
        <div className="flex items-center gap-space-sm">
          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-primary-container text-on-primary">
            <Icon name="menu_book" size={16} />
          </span>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-semibold">
              Botanical Taxa Index
            </span>
            <span className="text-outline-variant font-code-mono text-body-sm">/</span>
            <span className="font-code-mono text-body-sm text-secondary font-semibold">SOLANACEAE · DEMO</span>
          </div>
        </div>
        <div className="flex items-center gap-space-md text-on-surface-variant">
          <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm bg-surface-container px-space-sm py-0.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-outline"></span> {DISEASES.length} Illustrative Tomato Profiles
          </span>
          <SampleBadge label="Unverified content" />
        </div>
      </div>
    </section>
  );
}

export function CatalogHeading() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end mb-space-xl">
      <div className="lg:col-span-8 flex flex-col gap-space-xs">
        <div className="flex items-center gap-space-xs text-secondary font-label-lg text-label-lg uppercase tracking-widest">
          <Icon name="library_books" size={18} /> Agronomic Pathogen Repository
        </div>
        <h1 className="font-headline-xl-mobile text-headline-xl-mobile sm:font-headline-xl sm:text-headline-xl text-primary-container tracking-tight">
          Solanaceous Crop Pathology Index
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
          Illustrative foliar symptom notes and general management pointers for commercial greenhouses and field operations.
        </p>
      </div>
      <div className="lg:col-span-4 bg-surface-container rounded-xl p-space-md flex items-center justify-between shadow-sm">
        <div>
          <span className="font-label-sm text-label-sm text-on-surface-variant block uppercase tracking-wider">Sample Entries</span>
          <span className="font-headline-lg text-headline-lg text-primary-container font-bold">{DISEASES.length}</span>
          <span className="font-body-sm text-body-sm text-on-surface-variant block mt-0.5">Demo content, not validated</span>
        </div>
        <div className="h-12 w-12 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary-container">
          <Icon name="biotech" size={28} />
        </div>
      </div>
    </div>
  );
}
