import Icon from '../Icon';
import PlaceholderAction from '../PlaceholderAction';

// Stitch claimed ISO/AG-8411 verification against "international standards and peer-reviewed archives". Replaced.
export default function ValidationNotice() {
  return (
    <section className="w-full max-w-[1440px] mx-auto px-margin-mobile sm:px-margin pb-space-2xl">
      <div className="bg-primary-container text-on-primary rounded-xl p-space-md sm:p-space-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-lg shadow-md">
        <div className="flex items-start gap-space-md">
          <div className="p-3 bg-secondary rounded-lg shrink-0 text-on-secondary">
            <Icon name="policy" size={28} />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="font-headline-sm text-headline-sm font-bold text-on-primary">Content Review Notice</h4>
              <span className="px-2 py-0.5 rounded bg-surface-container-highest/20 font-code-mono text-body-sm text-secondary-container">
                UNVERIFIED
              </span>
            </div>
            <p className="font-body-md text-body-md text-primary-fixed max-w-2xl">
              Entries in this catalog are illustrative demo content. They have not been verified against phytopathological standards or
              reviewed by a plant pathologist. Do not use them for treatment decisions.
            </p>
          </div>
        </div>
        <PlaceholderAction
          as="button"
          message="The agronomic guide isn't available in the demo build."
          className="shrink-0 px-space-md py-2.5 rounded-lg bg-surface text-primary-container font-label-lg text-label-lg hover:bg-secondary-container transition-all flex items-center gap-2"
        >
          <Icon name="download" size={18} /> <span>Download Agronomic Guide PDF</span>
        </PlaceholderAction>
      </div>
    </section>
  );
}
