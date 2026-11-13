import SampleBadge from '../SampleBadge';
import { PARTNER_PLACEHOLDERS } from '../../data/home';

export default function ResearchPartners() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile sm:px-margin py-space-xl">
      <div className="flex flex-col items-center text-center gap-space-sm mb-space-lg">
        <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider inline-flex items-center gap-space-sm flex-wrap justify-center">
          Scientific Credibility
          <SampleBadge label="Placeholders" />
        </span>
        <h3 className="font-headline-sm text-headline-sm text-primary">
          Collaborations With Agricultural Institutes &amp; Research Centers
        </h3>
        <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xl">
          Reserved space for future partner logos. No partnerships or endorsements are implied by this prototype.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-space-md items-center">
        {PARTNER_PLACEHOLDERS.map((name) => (
          <div
            key={name}
            className="bg-surface-container-lowest p-space-md rounded-xl text-center shadow-sm flex flex-col items-center justify-center h-24 border border-dashed border-outline-variant"
          >
            <span className="font-headline-sm text-headline-sm text-primary-container font-bold">{name}</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">Logo placeholder</span>
          </div>
        ))}
      </div>
    </section>
  );
}
