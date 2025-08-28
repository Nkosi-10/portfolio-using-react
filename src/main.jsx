import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import faviconUrl from './assets/favicon.png'
import App from './App.jsx'

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)

// Ensure favicon is set using bundled asset (works in prod builds)
(() => {
  const existing = document.querySelector('link[rel="icon"]');
  if (existing) {
    existing.href = faviconUrl;
  } else {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = faviconUrl;
    document.head.appendChild(link);
  }
})();
