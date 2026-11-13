import { Route, Routes } from 'react-router-dom';
import SiteLayout from './layouts/SiteLayout';
import Dashboard from './pages/Dashboard';
import Detect from './pages/Detect';
import Home from './pages/Home';
import Library from './pages/Library';
import NotFound from './pages/NotFound';
import Results from './pages/Results';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="detect" element={<Detect />} />
        <Route path="results" element={<Results />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="library" element={<Library />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
