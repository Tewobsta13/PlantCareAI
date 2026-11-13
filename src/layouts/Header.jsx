import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import Icon from '../components/Icon';
import { images } from '../assets/images';
import { DEMO_USER, NAV_ITEMS } from '../data/site';

const linkBase = 'px-space-md py-space-sm transition-all rounded-lg';
const linkActive = 'bg-primary-container text-on-primary font-label-lg';
const linkIdle = 'font-label-lg text-label-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface';

const navClass = ({ isActive }) => `${linkBase} ${isActive ? linkActive : linkIdle}`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [avatarFailed, setAvatarFailed] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Close the mobile menu on navigation or Escape.
  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const openUpload = () => navigate('/detect', { state: { openPicker: true } });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(23,61,43,0.06)]">
      <div className="h-20 max-w-[1440px] mx-auto px-margin-mobile sm:px-margin flex items-center justify-between gap-space-md sm:gap-space-lg">
        <Link to="/" className="flex items-center gap-space-md rounded-lg" aria-label="PlantCare AI home">
          <BrandLogo className="h-8" />
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm text-primary-container tracking-tight leading-none">PlantCare AI</span>
            <span className="font-label-sm text-label-sm text-on-surface-variant tracking-wider uppercase mt-0.5">
              Agritech Intelligence
            </span>
          </div>
        </Link>

        <nav aria-label="Primary" className="hidden xl:flex items-center gap-space-xs p-1 rounded-xl bg-surface-container-low">
          {NAV_ITEMS.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === '/'} className={navClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-space-sm sm:gap-space-md">
          <button
            type="button"
            onClick={openUpload}
            aria-label="Upload leaf"
            className="inline-flex items-center gap-space-xs px-space-sm sm:px-space-md py-space-sm bg-secondary text-on-secondary rounded-lg font-label-lg text-label-lg shadow-[0_2px_8px_rgba(21,108,63,0.18)] hover:bg-primary-container transition-all active:scale-[0.98]"
          >
            <Icon name="upload_file" size={18} />
            <span className="hidden sm:inline">Upload Leaf</span>
          </button>
          <div className="hidden sm:flex items-center gap-space-sm pl-space-sm">
            <div className="text-right">
              <div className="font-label-md text-label-md text-primary-container leading-tight">{DEMO_USER.name}</div>
              <div className="font-label-sm text-label-sm text-on-surface-variant leading-tight">{DEMO_USER.role}</div>
            </div>
            {avatarFailed ? (
              <span className="w-8 h-8 rounded-full bg-primary-container text-on-primary font-label-sm text-label-sm grid place-items-center">
                EV
              </span>
            ) : (
              <img
                src={images.profileAvatar}
                alt="Profile"
                onError={() => setAvatarFailed(true)}
                className="w-8 h-8 rounded-full object-cover shadow-[0_1px_4px_rgba(23,61,43,0.15)]"
              />
            )}
          </div>
          <button
            type="button"
            className="xl:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg bg-surface-container-low text-primary-container hover:bg-surface-container-high transition-colors"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} size={22} />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="xl:hidden border-t border-outline-variant/40 bg-surface shadow-[0_12px_32px_-4px_rgba(23,61,43,0.12)]"
        >
          <div className="max-w-[1440px] mx-auto px-margin-mobile sm:px-margin py-space-sm flex flex-col gap-space-xs">
            {NAV_ITEMS.map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'} className={(s) => `${navClass(s)} min-h-11 flex items-center`}>
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
