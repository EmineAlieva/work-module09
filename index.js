import * as Sentry from './node_modules@sentry/browser';
import { Integrations } from './node_modules@sentry/tracing';

Sentry.init({
  dsn: 'YOUR_SENTRY_DSN',
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
});

// myUndefinedFunction();

const user = 'Emine';
console.log(user);
