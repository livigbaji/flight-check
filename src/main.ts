import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { enableAkitaProdMode } from '@datorama/akita';
import { environment } from './environments/environment';
import 'hammerjs';
import './persist-state';


if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
