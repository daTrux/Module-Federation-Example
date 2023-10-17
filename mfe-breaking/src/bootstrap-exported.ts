import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {environment} from './environments/environment';
import {RemoteTemplateModule} from './app/remote-template/remote-template.module';

declare const require: any;

const ngVersion = require('../package.json').dependencies['@angular/core'];
const packageName = require('../package.json').name;

async function main(): Promise<void> {
  try {

    (window as any).plattform = (window as any).plattform || {};
    let platform = (window as any).plattform[`${packageName}-${ngVersion}`];
    if (!platform) {
      if (environment.production) {
        try {
          enableProdMode();
        } catch (e) {
          // Angular Production already enabled for this platform
        }
      }
      platform = platformBrowserDynamic();
      (window as any).plattform[`${packageName}-${ngVersion}`] = platform;
      // Specify the remote module to boostrap when this file exposed by your plugin is loaded
      await platform.bootstrapModule(RemoteTemplateModule)
        .catch((err: any) => console.error(err));
    }



  } catch (error) {
    console.error(error);
  }
}

main();
