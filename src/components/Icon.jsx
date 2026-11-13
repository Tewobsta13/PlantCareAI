/** Material Symbols Outlined glyph (the icon set used by the Stitch designs). */
export default function Icon({ name, size, filled = false, className = '', style, ...rest }) {
  return (
    <span
      className={`material-symbols-outlined ${filled ? 'icon-filled' : ''} ${className}`.trim()}
      style={size ? { fontSize: size, ...style } : style}
      aria-hidden="true"
      {...rest}
    >
      {name}
    </span>
  );
}
