import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppLanguageService {
  public selectedLanguage: BehaviorSubject<string> = new BehaviorSubject(
    navigator.language
  );
  constructor() {}

  public getSelectedLanguage(): string {
    return this.selectedLanguage.value;
  }

  public setSelectedLanguage(newLanguage: string) {
    this.selectedLanguage.next(newLanguage);
    sessionStorage.selectedLocale = newLanguage;
    console.log(this.selectedLanguage);
  }
}
