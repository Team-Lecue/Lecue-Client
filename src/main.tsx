import * as Sentry from '@sentry/react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';

process.env.NODE_ENV === 'production' &&
  Sentry.init({
    dsn: 'https://ff1721b5da5c3ed5ed8c4e4507b6ad51@o4506557086629888.ingest.sentry.io/4506573475741696',

    integrations: [
      new Sentry.BrowserTracing({
        tracePropagationTargets: ['localhost', /^https:\/\/lecue\.me\/api/],
      }),
      new Sentry.Replay({
        maskAllText: false,
        blockAllMedia: false,
      }),
    ],
    tracesSampleRate: 1.0,
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
  });

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
