import { Link } from 'react-router-dom';
import useToast, { PLACEHOLDER_MESSAGE } from '../hooks/useToast';

/**
 * A link-or-button that is honest about being unfinished:
 * with `to` it navigates; without it, it shows a toast instead of silently doing nothing.
 */
export default function PlaceholderAction({ to, message = PLACEHOLDER_MESSAGE, as = 'a', children, className = '', ...rest }) {
  const notify = useToast();
  if (to)
    return (
      <Link to={to} className={className} {...rest}>
        {children}
      </Link>
    );
  if (as === 'button') {
    return (
      <button type="button" className={className} onClick={() => notify(message)} {...rest}>
        {children}
      </button>
    );
  }
  return (
    <a
      href="#"
      className={className}
      onClick={(e) => {
        e.preventDefault();
        notify(message);
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
