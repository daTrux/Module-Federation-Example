import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

declare const require: any;

async function main(): Promise<void> {
  try {
    const ngVersion = require('../package.json').dependencies['@angular/core'];
    const packageName = require('../package.json').name;
    (window as any).plattform = (window as any).plattform || {};
    let platform = (window as any).plattform[`${packageName}-${ngVersion}`];
    if (!platform) {
      if (environment.production) {
        try {
          enableProdMode();
        } catch (e) {
          // Already Enabled
        }
      }
      platform = platformBrowserDynamic();
      (window as any).plattform[`${packageName}-${ngVersion}`] = platform;
    }

    await platform
      .bootstrapModule(AppModule)
      .catch((err: any) => console.error(err));
  } catch (error) {
    console.error(error);
  }
}

main();
