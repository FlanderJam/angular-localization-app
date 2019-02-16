import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-language-select',
  templateUrl: './app-language-select.component.html',
  styleUrls: ['./app-language-select.component.scss']
})
export class AppLanguageSelectComponent implements OnInit {

  public languageList: string[] = [
    'Arabic',
    'English',
    'Spanish',
    'Chinese (Simplified)',
    'Chinese (China)',
    'Chinese (Simplified, China)'
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public onClickLanguage(language: string) {
    console.log(`${language} clicked`);
    console.log('changing language... launching page-one...');
    this.router.navigate(['/page-one']);
  }
}
