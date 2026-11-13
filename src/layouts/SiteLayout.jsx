import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import DemoNotice from './DemoNotice';
import Footer from './Footer';
import Header from './Header';

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      // let the page render first, then jump to the anchor
      requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' }));
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function SiteLayout() {
  return (
    <>
      <ScrollManager />
      <Header />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-280px)]">
        <div className="flex flex-col w-full">
          <Outlet />
        </div>
      </main>
      <Footer />
      <DemoNotice />
    </>
  );
}
