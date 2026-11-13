import { useNavigate } from 'react-router-dom';
import { images } from '../../assets/images';
import useToast from '../../hooks/useToast';
import PlaceholderAction from '../PlaceholderAction';

export default function DashboardMain() {
  const navigate = useNavigate();
  const notify = useToast();
  const openDiagnosis = (sample) => navigate(`/results?sample=${sample}`);
  return (
    <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-xl">
      {/* LEFT COLUMN: Chart & Prevalence Breakdown (7 Cols) */}
      <div className="xl:col-span-7 flex flex-col gap-space-xl">
        {/* Timeline Chart Card */}
        <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-xl shadow-sm flex flex-col gap-space-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm">
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                Seasonal Trajectory (sample data)
              </span>
              <h2 className="font-headline-md text-headline-md text-primary-container">Scan Volume: Healthy vs. Pathogen Detected</h2>
            </div>
            <div className="flex items-center gap-space-md font-label-sm text-label-sm">
              <span className="inline-flex items-center gap-1.5 text-on-surface-variant">
                <span className="w-2.5 h-2.5 rounded-sm bg-secondary"></span> Healthy
              </span>
              <span className="inline-flex items-center gap-1.5 text-on-surface-variant">
                <span className="w-2.5 h-2.5 rounded-sm bg-error"></span> Pathogen
              </span>
            </div>
          </div>
          {/* Custom Inline SVG Stacked Bar / Trend Visualization */}
          <div className="w-full bg-surface-container-low rounded-xl p-space-md">
            <div className="w-full overflow-x-auto">
              <svg className="w-full h-56 select-none" preserveAspectRatio="none" viewBox="0 0 680 220">
                {/* Grid Lines */}
                <line className="text-surface-variant" stroke="currentColor" strokeDasharray="3 3" x1="40" x2="660" y1="30" y2="30" />
                <line className="text-surface-variant" stroke="currentColor" strokeDasharray="3 3" x1="40" x2="660" y1="80" y2="80" />
                <line className="text-surface-variant" stroke="currentColor" strokeDasharray="3 3" x1="40" x2="660" y1="130" y2="130" />
                <line className="text-surface-variant" stroke="currentColor" x1="40" x2="660" y1="180" y2="180" />
                {/* Left Axis Labels */}
                <text className="fill-current text-on-surface-variant font-code-mono" fontSize="10" textAnchor="end" x="30" y="34">
                  200
                </text>
                <text className="fill-current text-on-surface-variant font-code-mono" fontSize="10" textAnchor="end" x="30" y="84">
                  150
                </text>
                <text className="fill-current text-on-surface-variant font-code-mono" fontSize="10" textAnchor="end" x="30" y="134">
                  100
                </text>
                <text className="fill-current text-on-surface-variant font-code-mono" fontSize="10" textAnchor="end" x="30" y="184">
                  0
                </text>
                {/* Month Bars (Mar - Oct) */}
                {/* Mar: 70 H, 15 P */}
                <rect
                  className="fill-current text-secondary transition-all hover:opacity-80"
                  height="55"
                  rx="3"
                  width="28"
                  x="70"
                  y="125"
                />
                <rect className="fill-current text-error transition-all hover:opacity-80" height="18" rx="3" width="28" x="70" y="105" />
                <text className="fill-current text-on-surface-variant font-label-sm" fontSize="11" textAnchor="middle" x="84" y="200">
                  Mar
                </text>
                {/* Apr: 95 H, 22 P */}
                <rect
                  className="fill-current text-secondary transition-all hover:opacity-80"
                  height="75"
                  rx="3"
                  width="28"
                  x="145"
                  y="105"
                />
                <rect className="fill-current text-error transition-all hover:opacity-80" height="21" rx="3" width="28" x="145" y="82" />
                <text className="fill-current text-on-surface-variant font-label-sm" fontSize="11" textAnchor="middle" x="159" y="200">
                  Apr
                </text>
                {/* May: 120 H, 30 P */}
                <rect
                  className="fill-current text-secondary transition-all hover:opacity-80"
                  height="95"
                  rx="3"
                  width="28"
                  x="220"
                  y="85"
                />
                <rect className="fill-current text-error transition-all hover:opacity-80" height="28" rx="3" width="28" x="220" y="55" />
                <text className="fill-current text-on-surface-variant font-label-sm" fontSize="11" textAnchor="middle" x="234" y="200">
                  May
                </text>
                {/* Jun: 140 H, 45 P */}
                <rect
                  className="fill-current text-secondary transition-all hover:opacity-80"
                  height="110"
                  rx="3"
                  width="28"
                  x="295"
                  y="70"
                />
                <rect className="fill-current text-error transition-all hover:opacity-80" height="36" rx="3" width="28" x="295" y="32" />
                <text className="fill-current text-on-surface-variant font-label-sm" fontSize="11" textAnchor="middle" x="309" y="200">
                  Jun
                </text>
                {/* Jul: 165 H, 58 P (Peak heat) */}
                <rect
                  className="fill-current text-secondary transition-all hover:opacity-80"
                  height="125"
                  rx="3"
                  width="28"
                  x="370"
                  y="55"
                />
                <rect className="fill-current text-error transition-all hover:opacity-80" height="35" rx="3" width="28" x="370" y="18" />
                <text className="fill-current text-on-surface-variant font-label-sm" fontSize="11" textAnchor="middle" x="384" y="200">
                  Jul
                </text>
                {/* Aug: 150 H, 52 P */}
                <rect
                  className="fill-current text-secondary transition-all hover:opacity-80"
                  height="115"
                  rx="3"
                  width="28"
                  x="445"
                  y="65"
                />
                <rect className="fill-current text-error transition-all hover:opacity-80" height="35" rx="3" width="28" x="445" y="28" />
                <text className="fill-current text-on-surface-variant font-label-sm" fontSize="11" textAnchor="middle" x="459" y="200">
                  Aug
                </text>
                {/* Sep: 135 H, 42 P */}
                <rect
                  className="fill-current text-secondary transition-all hover:opacity-80"
                  height="102"
                  rx="3"
                  width="28"
                  x="520"
                  y="78"
                />
                <rect className="fill-current text-error transition-all hover:opacity-80" height="32" rx="3" width="28" x="520" y="44" />
                <text className="fill-current text-on-surface-variant font-label-sm" fontSize="11" textAnchor="middle" x="534" y="200">
                  Sep
                </text>
                {/* Oct (Current): 107 H, 38 P */}
                <rect
                  className="fill-current text-secondary transition-all hover:opacity-80"
                  height="82"
                  rx="3"
                  width="28"
                  x="595"
                  y="98"
                />
                <rect className="fill-current text-error transition-all hover:opacity-80" height="28" rx="3" width="28" x="595" y="68" />
                <text className="fill-current text-secondary font-label-sm font-semibold" fontSize="11" textAnchor="middle" x="609" y="200">
                  Oct (Now)
                </text>
              </svg>
            </div>
            <div className="flex items-center justify-between pt-space-xs px-2 text-on-surface-variant font-body-sm text-body-sm">
              <span>Peak spore propagation observed in July heatwave</span>
              <span className="font-code-mono text-code-mono font-medium text-primary-container">Total 2025 YTD: 1,489 Scans</span>
            </div>
          </div>
          {/* Disease Prevalence Breakdown Section */}
          <div className="flex flex-col gap-space-md pt-space-xs">
            <div className="flex items-center justify-between">
              <span className="font-headline-sm text-headline-sm text-primary-container">Disease Prevalence Breakdown</span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">Sample Size: 302 Confirmed Cases</span>
            </div>
            {/* Segmented horizontal progress bar */}
            <div className="h-3 w-full rounded-full overflow-hidden flex bg-surface-container gap-0.5">
              <div className="bg-error h-full" style={{ width: '42%' }} title="Tomato Early Blight (42%)"></div>
              <div className="bg-[#e07a3f] h-full" style={{ width: '28%' }} title="Bacterial Spot (28%)"></div>
              <div className="bg-[#d4a838] h-full" style={{ width: '19%' }} title="Leaf Mold (19%)"></div>
              <div className="bg-outline h-full" style={{ width: '11%' }} title="Others (11%)"></div>
            </div>
            {/* Legend Pills with metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-space-sm pt-space-xs">
              <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-0.5">
                <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
                  <span className="w-2 h-2 rounded-full bg-error"></span>
                  <span className="truncate">Early Blight</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-headline-sm text-headline-sm text-primary-container">42%</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">127 cases</span>
                </div>
              </div>
              <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-0.5">
                <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
                  <span className="w-2 h-2 rounded-full bg-[#e07a3f]"></span>
                  <span className="truncate">Bacterial Spot</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-headline-sm text-headline-sm text-primary-container">28%</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">85 cases</span>
                </div>
              </div>
              <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-0.5">
                <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
                  <span className="w-2 h-2 rounded-full bg-[#d4a838]"></span>
                  <span className="truncate">Leaf Mold</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-headline-sm text-headline-sm text-primary-container">19%</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">57 cases</span>
                </div>
              </div>
              <div className="bg-surface-container-low p-space-sm rounded-lg flex flex-col gap-0.5">
                <div className="flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
                  <span className="w-2 h-2 rounded-full bg-outline"></span>
                  <span className="truncate">Others</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-headline-sm text-headline-sm text-primary-container">11%</span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">33 cases</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Agronomic Recommendations Widget */}
        <div className="bg-primary-container text-on-primary p-space-md sm:p-space-lg rounded-xl shadow-md flex flex-col gap-space-md">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[22px] text-primary-fixed">psychology_alt</span>
              <h3 className="font-headline-md text-headline-md text-on-primary">Seasonal Preventative Directives</h3>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-secondary text-on-secondary font-label-sm text-label-sm uppercase font-semibold">
              Illustrative
            </span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            {/* Directive 1 */}
            <div className="bg-primary/40 p-space-md rounded-xl flex flex-col gap-space-xs">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-[#fcd34d]">water_drop</span>
                <span className="font-label-lg text-label-lg font-semibold text-primary-fixed">High Humidity Forecast</span>
              </div>
              <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                Ventilate <span className="font-semibold text-on-primary">Greenhouse 2</span> immediately to suppress{' '}
                <em>Cladosporium fulvum</em> (Leaf Mold) spore germination. Sample sensor reading: humidity is above the comfortable range.
              </p>
              <div className="mt-auto pt-2 flex items-center gap-2">
                <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider">Protocol Action:</span>
                <button
                  className="font-label-sm text-label-sm text-on-primary underline hover:text-primary-fixed"
                  type="button"
                  onClick={() => notify("Device control isn't available in the demo build.")}
                >
                  Activate Air Scrubbers
                </button>
              </div>
            </div>
            {/* Directive 2 */}
            <div className="bg-primary/40 p-space-md rounded-xl flex flex-col gap-space-xs">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary-fixed">sync_alt</span>
                <span className="font-label-lg text-label-lg font-semibold text-primary-fixed">Crop Rotation Advisory</span>
              </div>
              <p className="font-body-md text-body-md text-on-primary-container leading-relaxed">
                Solanaceae plots require a <span className="font-semibold text-on-primary">multi-season rotation break</span> post-blight
                season to break persistent <em>Alternaria solani</em> carry-over in crop debris before replanting.
              </p>
              <div className="mt-auto pt-2 flex items-center gap-2">
                <span className="font-label-sm text-label-sm text-primary-fixed uppercase tracking-wider">Protocol Action:</span>
                <button
                  className="font-label-sm text-label-sm text-on-primary underline hover:text-primary-fixed"
                  type="button"
                  onClick={() => notify("Rotation planning isn't available in the demo build.")}
                >
                  Log Rotation Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* RIGHT COLUMN: Recent Field Analysis History Feed (5 Cols) */}
      <div className="xl:col-span-5 flex flex-col gap-space-lg">
        <div className="bg-surface-container-lowest p-space-md sm:p-space-lg rounded-xl shadow-sm flex flex-col gap-space-lg">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Sample Feed</span>
              <h2 className="font-headline-md text-headline-md text-primary-container">Recent Field Analyses</h2>
            </div>
            <PlaceholderAction
              className="font-label-md text-label-md text-secondary hover:text-primary-container flex items-center gap-1 font-semibold"
              message="The full scan history isn't available in the demo build."
            >
              View All (1,284) <span className="material-symbols-outlined text-[16px]">chevron_right</span>
            </PlaceholderAction>
          </div>
          {/* Feed Items Stack */}
          <div className="flex flex-col gap-space-md">
            {/* Scan 1 */}
            <div className="bg-surface-container-low hover:bg-surface-container transition-all p-space-md rounded-xl flex flex-col gap-space-sm group">
              <div className="flex items-start justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm min-w-0">
                  <img
                    src={images.feedTomatoPlot4b}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0 shadow-sm"
                    alt="Macro close-up photograph of a diseased tomato leaf exhibiting concentric ring lesions and yellow chlorotic halo indicative of early blight alternaria solani in a bright agricultural laboratory"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline-sm text-headline-sm text-primary-container truncate">Tomato Plot 4B</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Row 14 • Camera Drone 03</span>
                  </div>
                </div>
                <span className="font-code-mono text-code-mono text-on-surface-variant flex-shrink-0">12 mins ago</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                  <span>Early Blight (94.8% conf)</span>
                </div>
                <button
                  className="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container hover:text-secondary font-semibold group-hover:translate-x-0.5 transition-transform"
                  type="button"
                  onClick={() => openDiagnosis('early-blight')}
                >
                  <span>View Diagnosis</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
            {/* Scan 2 */}
            <div className="bg-surface-container-low hover:bg-surface-container transition-all p-space-md rounded-xl flex flex-col gap-space-sm group">
              <div className="flex items-start justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm min-w-0">
                  <img
                    src={images.feedBellPepper}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0 shadow-sm"
                    alt="Vibrant clean green bell pepper plant leaf surface with rich natural chlorophyll texture under diffuse greenhouse lighting with zero pathogen spots"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline-sm text-headline-sm text-primary-container truncate">Bell Pepper Greenhouse 2</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Hydroponic Bay C • Sensor Node GH2</span>
                  </div>
                </div>
                <span className="font-code-mono text-code-mono text-on-surface-variant flex-shrink-0">2 hours ago</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span>Healthy Foliage (99.1% conf)</span>
                </div>
                <button
                  className="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container hover:text-secondary font-semibold group-hover:translate-x-0.5 transition-transform"
                  type="button"
                  onClick={() => openDiagnosis('healthy')}
                >
                  <span>View Diagnosis</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
            {/* Scan 3 */}
            <div className="bg-surface-container-low hover:bg-surface-container transition-all p-space-md rounded-xl flex flex-col gap-space-sm group">
              <div className="flex items-start justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm min-w-0">
                  <img
                    src={images.feedHeirloomTomato}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0 shadow-sm"
                    alt="Close up archival botanical view of heirloom tomato leaf with circular dark specks indicating septoria lycopersici infection taken in daylight field conditions"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline-sm text-headline-sm text-primary-container truncate">Heirloom Tomato Row 7</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Organic Sector • Handheld Rig</span>
                  </div>
                </div>
                <span className="font-code-mono text-code-mono text-on-surface-variant flex-shrink-0">Yesterday</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#fef3c7] text-[#b45309] font-label-sm text-label-sm font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]"></span>
                  <span>Septoria Leaf Spot (88.4% conf)</span>
                </div>
                <button
                  className="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container hover:text-secondary font-semibold group-hover:translate-x-0.5 transition-transform"
                  type="button"
                  onClick={() => notify("A detailed diagnosis for this entry isn't included in the demo build.")}
                >
                  <span>View Diagnosis</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
            {/* Scan 4 */}
            <div className="bg-surface-container-low hover:bg-surface-container transition-all p-space-md rounded-xl flex flex-col gap-space-sm group">
              <div className="flex items-start justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm min-w-0">
                  <img
                    src={images.feedRomaTomato}
                    className="w-12 h-12 rounded-lg object-cover flex-shrink-0 shadow-sm"
                    alt="Lush healthy Roma tomato trellis canopy with clean deep green leaves and healthy stem structure in bright natural morning sunshine"
                  />
                  <div className="flex flex-col min-w-0">
                    <span className="font-headline-sm text-headline-sm text-primary-container truncate">Roma Tomato Trellis 1</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">Plot 8 • Autonomous Rover</span>
                  </div>
                </div>
                <span className="font-code-mono text-code-mono text-on-surface-variant flex-shrink-0">2 days ago</span>
              </div>
              <div className="flex items-center justify-between pt-1">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span>Healthy Foliage (97.9% conf)</span>
                </div>
                <button
                  className="inline-flex items-center gap-1 font-label-md text-label-md text-primary-container hover:text-secondary font-semibold group-hover:translate-x-0.5 transition-transform"
                  type="button"
                  onClick={() => openDiagnosis('healthy')}
                >
                  <span>View Diagnosis</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
          {/* Micro Quick Scanner Box */}
          <div className="p-space-md rounded-xl bg-surface-container flex items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">camera</span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-primary-container">Field Camera Sync</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">No cameras connected (demo)</span>
              </div>
            </div>
            <span className="font-code-mono text-code-mono text-secondary font-semibold">DEMO</span>
          </div>
        </div>
      </div>
    </div>
  );
}
