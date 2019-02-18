import {
  enableProdMode,
  TRANSLATIONS,
  TRANSLATIONS_FORMAT,
  MissingTranslationStrategy
} from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// use the require method provided by webpack
declare const require;
// we use the webpack raw-loader to return the content as a string
// English
const translations = sessionStorage.getItem('selectedLocale')
  ? require(`raw-loader!./locale/messages.${sessionStorage.getItem(
      'selectedLocale'
    )}.xlf`)
  : require(`raw-loader!./locale/messages.en.xlf`);
// "Spanish"
// const translations = require(`raw-loader!./locale/messages.es.xlf`);

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    missingTranslation: MissingTranslationStrategy.Warning,
    providers: [
      { provide: TRANSLATIONS, useValue: translations },
      { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' }
    ]
  })
  .catch(err => console.error(err));
