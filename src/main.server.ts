import { bootstrapApplication, BootstrapContext } from '@angular/platform-browser';
import { App } from './app/app';
import { config } from './app/app.config.server';

// The route extractor passes `{ platformRef }` as the first argument.
// Forward it as the third 'context' param so Angular reuses the server platform.
const bootstrap = (context?: BootstrapContext) =>
  bootstrapApplication(App, config, context);

export default bootstrap;
