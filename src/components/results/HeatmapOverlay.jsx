/** Draws illustrative lesion regions from `localization.regions` (normalised 0..1) in a 400x300 box. */
export default function HeatmapOverlay({ regions }) {
  return (
    <svg className="w-full h-full" fill="none" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {regions.map((r) => {
        const cx = r.x * 400,
          cy = r.y * 300,
          R = r.w * 400 * 0.6;
        return (
          <g key={r.id}>
            <circle cx={cx} cy={cy} r={R} fill="#BA1A1A" fillOpacity="0.32" />
            <circle cx={cx} cy={cy} r={R * 0.66} fill="#BA1A1A" fillOpacity="0.48" />
            <circle cx={cx} cy={cy} r={R * 0.33} fill="#7F0000" fillOpacity="0.65" />
            <circle cx={cx} cy={cy} r={R * 1.12} stroke="#FFE082" strokeDasharray="4 4" strokeOpacity="0.8" strokeWidth="2" />
            {r.id === 1 &&
              [
                [-1, -1],
                [1, -1],
                [-1, 1],
                [1, 1],
              ].map(([sx, sy]) => {
                const bx = cx + sx * R * 1.15,
                  by = cy + sy * R * 0.83;
                return (
                  <path
                    key={`${sx}${sy}`}
                    d={`M ${bx - sx * 10} ${by} L ${bx} ${by} L ${bx} ${by - sy * 10}`}
                    stroke="#156C3F"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />
                );
              })}
          </g>
        );
      })}
    </svg>
  );
}
