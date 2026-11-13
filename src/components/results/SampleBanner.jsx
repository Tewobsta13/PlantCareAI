import Icon from '../Icon';

/** Always shown while a result is a sample: states plainly that the image was NOT analyzed. */
export default function SampleBanner({ result, submission }) {
  const name = submission?.name;
  return (
    <div
      role="note"
      className="rounded-xl border border-dashed border-outline bg-surface-container-lowest p-space-md flex items-start gap-space-md"
    >
      <Icon name="science" size={24} className="text-secondary shrink-0 mt-0.5" />
      <div className="flex-1 min-w-0">
        <p className="font-label-lg text-label-lg text-primary-container font-semibold">Sample result for demonstration</p>
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
          {name ? (
            <>
              No AI model analyzed <strong className="break-all">{name}</strong>.{' '}
            </>
          ) : (
            'No AI model is connected. '
          )}
          This page shows a pre-written example ({result.prediction.label}). The prediction, confidence, heatmap, percentages and
          recommendations are illustrative and are not derived from {name ? 'your image' : 'any photo'}.
        </p>
      </div>
      {submission?.previewUrl && (
        <figure className="shrink-0 text-center">
          <img src={submission.previewUrl} alt="The image you submitted" className="w-14 h-14 rounded-lg object-cover shadow-sm" />
          <figcaption className="font-label-sm text-label-sm text-on-surface-variant mt-1">You submitted</figcaption>
        </figure>
      )}
    </div>
  );
}
