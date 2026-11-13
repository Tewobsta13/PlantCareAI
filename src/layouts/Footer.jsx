import BrandLogo from '../components/BrandLogo';
import PlaceholderAction from '../components/PlaceholderAction';
import SampleBadge from '../components/SampleBadge';
import { FOOTER_BLURB, FOOTER_COLUMNS, FOOTER_LEGAL_LINKS } from '../data/site';

const linkClass = 'font-body-md text-body-md text-on-surface-variant hover:text-primary-container transition-colors';
const legalClass = 'font-label-sm text-label-sm text-on-surface-variant hover:text-primary-container transition-colors';

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-low mt-space-2xl">
      <div className="max-w-[1440px] mx-auto px-margin-mobile sm:px-margin py-space-2xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-space-xl pb-space-2xl">
          <div className="lg:col-span-2 flex flex-col gap-space-md">
            <div className="flex items-center gap-space-sm">
              <BrandLogo className="h-7" />
              <span className="font-headline-sm text-headline-sm text-primary-container">PlantCare AI</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">{FOOTER_BLURB}</p>
            <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-primary-container font-label-sm text-label-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-outline"></span>
                Demo build · No model connected
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                Target latency &lt; 280ms
              </span>
            </div>
          </div>
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-space-sm">
              <span className="font-label-lg text-label-lg text-primary-container uppercase tracking-wider flex items-center gap-space-sm flex-wrap">
                {col.title}
                {col.sample && <SampleBadge />}
              </span>
              {col.links.map((l) => (
                <PlaceholderAction key={l.label} to={l.to} className={linkClass}>
                  {l.label}
                </PlaceholderAction>
              ))}
            </div>
          ))}
        </div>
        <div className="pt-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md">
          <div className="font-body-sm text-body-sm text-on-surface-variant">
            © 2025 PlantCare AI Technologies Inc. Developed for professional agro-ecological and botanical research applications.
          </div>
          <div className="flex items-center gap-space-lg flex-wrap justify-center">
            {FOOTER_LEGAL_LINKS.map((label) => (
              <PlaceholderAction key={label} className={legalClass}>
                {label}
              </PlaceholderAction>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
