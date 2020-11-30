import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { defineCustomElements, applyPolyfills } from '../stencil-ds/loader';

if (environment.production) {
  enableProdMode();
}

applyPolyfills()
  .then(() => {
    defineCustomElements();
  }).catch((err) => {
    console.log('err in defineCustomElements: ', err);
  });

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => {
    console.log('error in bootstrapModule');
  });
