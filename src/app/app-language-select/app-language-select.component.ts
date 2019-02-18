import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppLanguageService } from '../services/app-language-service.service';

@Component({
  selector: 'app-app-language-select',
  templateUrl: './app-language-select.component.html',
  styleUrls: ['./app-language-select.component.scss']
})
export class AppLanguageSelectComponent implements OnInit {
  public languageList: any = {
    Arabic: 'ar',
    English: 'en',
    Spanish: 'es',
    'Chinese (Simplified)': 'zh-Hans',
    'Chinese (China)': 'zh-Hant',
    'Chinese (Simplified, China)': 'zh-Hant-HK'
  };

  public languageListKeys: string[] = Object.keys(this.languageList);

  constructor(
    private router: Router,
    private appLanguageService: AppLanguageService
  ) {}

  ngOnInit() {}

  public onClickLanguage(language: string) {
    console.log(`${language} clicked`);
    console.log('changing language... launching page-one...');
    console.log(this.appLanguageService.getSelectedLanguage());
    this.appLanguageService.setSelectedLanguage(language);
    this.router.navigate(['/page-one']);
    window.location.reload();
  }
}
