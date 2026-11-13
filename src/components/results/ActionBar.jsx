import Icon from '../Icon';
import PlaceholderAction from '../PlaceholderAction';

const secondary =
  'inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors';

export default function ActionBar({ onDownload }) {
  return (
    <div className="no-print bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
      <div className="flex items-center gap-space-sm text-on-surface-variant">
        <Icon name="cloud_off" className="text-secondary" />
        <span className="font-body-sm text-body-sm">Sample result: nothing was saved or sent anywhere.</span>
      </div>
      <div className="flex flex-wrap items-center gap-space-sm w-full md:w-auto justify-end">
        <PlaceholderAction as="button" className={secondary} message="Sending to an agronomist isn't available in the demo build.">
          <Icon name="forward_to_inbox" size={18} />
          <span>Send to Agronomist</span>
        </PlaceholderAction>
        <PlaceholderAction as="button" className={secondary} message="Farm history logging isn't available in the demo build.">
          <Icon name="history_edu" size={18} />
          <span>Log into Farm History</span>
        </PlaceholderAction>
        <button
          type="button"
          onClick={onDownload}
          className="inline-flex items-center gap-1.5 px-space-md py-2 rounded-lg bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md transition-colors"
        >
          <Icon name="file_download" size={18} />
          <span>Download Field Report (PDF)</span>
        </button>
      </div>
    </div>
  );
}
