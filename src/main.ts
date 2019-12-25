import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { enableAkitaProdMode, akitaConfig } from '@datorama/akita';
import { environment } from './environments/environment';
import 'hammerjs';
import './persist-state';


if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
}

akitaConfig({
  resettable: true
});


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
