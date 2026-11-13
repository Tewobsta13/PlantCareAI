import Icon from '../Icon';
import SampleBadge from '../SampleBadge';
import { CROP_CATEGORIES } from '../../data/home';

function CategoryCard({ icon, count, title, crops, description, confidence }) {
  return (
    <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-2xl shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
            {count} Pathologies
          </span>
          <Icon name={icon} size={24} className="text-secondary" />
        </div>
        <div>
          <h3 className="font-headline-md text-headline-md text-primary">{title}</h3>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">{crops}</p>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
      </div>
      <div className="mt-space-md pt-space-sm bg-surface-container-low p-space-sm rounded-xl flex items-center justify-between">
        <span className="font-label-sm text-label-sm text-on-surface-variant">Avg Diagnostic Confidence</span>
        <span className="font-code-mono text-body-sm text-primary font-semibold">{confidence}</span>
      </div>
    </div>
  );
}

export default function CropCategories() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile sm:px-margin py-space-2xl">
      <div className="flex flex-col gap-space-sm mb-space-xl">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
          <span className="font-label-md text-label-md text-secondary uppercase tracking-wider font-semibold">Broad Taxonomic Range</span>
          <SampleBadge label="Sample figures" />
        </div>
        <h2 className="font-headline-xl-mobile sm:font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-primary">
          Supported Plant Categories &amp; Crops
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          Target crop families for the planned model, covering agricultural staples, greenhouse commodities, and specialty horticulture.
          Pathology counts and confidence values are placeholders.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {CROP_CATEGORIES.map((c) => (
          <CategoryCard key={c.title} {...c} />
        ))}
      </div>
    </section>
  );
}
