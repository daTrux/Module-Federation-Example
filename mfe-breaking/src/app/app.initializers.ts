import {loadTranslations} from '@angular/localize';
import xliff from 'xliff';
import {environment} from '../environments/environment';

export async function initializeLanguage(): Promise<void> {

  const language = localStorage.getItem('language');
  if (language && language !== 'en-US') {
    const data = await fetch(`${environment.baseUrl}/assets/i18n/${language}.xlf`);
    const xliffTxt = await data.text();

    const res = await xliff.xliff2js(xliffTxt);
    const jObj = res.resources.ngi18n;
    const keys = Object.keys(jObj);
    keys.forEach(key => {
      if (jObj[key].target instanceof Array) {
        jObj[key] = jObj[key].target.map((x: any) => typeof(x) === 'string' ? x : '{$' + x.Standalone.equiv + '}').join('');
      } else {
        jObj[key] = jObj[key].target ?? jObj[key].source;
      }

    });
    loadTranslations(jObj);
  }
}




