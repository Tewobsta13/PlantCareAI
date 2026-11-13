import { useNavigate } from 'react-router-dom';
import { DEMO_USER } from '../../data/site';
import useToast from '../../hooks/useToast';
import { exportSummary } from '../../utils/exportSummary';

export default function DashboardHeader() {
  const navigate = useNavigate();
  const notify = useToast();
  return (
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg">
      <div className="flex flex-col gap-space-xs">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span> SAMPLE DATA · NO LIVE TELEMETRY
          </span>
          <span className="font-code-mono text-code-mono text-on-surface-variant">Station ID: DEMO-001</span>
        </div>
        <h1 className="font-headline-xl-mobile text-headline-xl-mobile sm:font-headline-xl sm:text-headline-xl text-primary-container tracking-tight">
          Good morning, {DEMO_USER.name}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">Greenhouse Complex A &amp; Field Plots — Agronomic Telemetry</p>
      </div>
      <div className="flex flex-wrap items-center gap-space-sm">
        <button
          className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container-high text-on-surface font-label-lg text-label-lg shadow-sm hover:bg-surface-variant transition-all"
          type="button"
          onClick={() => notify("Season selection isn't available in the demo build.")}
        >
          <span className="material-symbols-outlined text-[18px]">calendar_today</span>
          <span>Growing Season 2025</span>
        </button>
        <button
          className="inline-flex items-center gap-2 px-space-md py-2.5 rounded-lg bg-surface-container-high text-on-surface font-label-lg text-label-lg shadow-sm hover:bg-surface-variant transition-all"
          type="button"
          onClick={exportSummary}
        >
          <span className="material-symbols-outlined text-[18px]">file_download</span>
          <span>Export Summary</span>
        </button>
        <button
          className="inline-flex items-center gap-2 px-space-lg py-2.5 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary transition-all active:scale-[0.98]"
          type="button"
          onClick={() => navigate('/detect')}
        >
          <span className="material-symbols-outlined text-[20px]">add_photo_alternate</span>
          <span>New Foliar Scan</span>
        </button>
      </div>
    </div>
  );
}
