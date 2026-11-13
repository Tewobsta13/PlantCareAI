import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AnalysisProvider from './components/AnalysisProvider';
import ToastProvider from './components/ToastProvider';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ToastProvider>
        <AnalysisProvider>
          <App />
        </AnalysisProvider>
      </ToastProvider>
    </BrowserRouter>
  </StrictMode>,
);
