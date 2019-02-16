import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLanguageSelectComponent } from './app-language-select/app-language-select.component';
import { AppPageOneComponent } from './app-page-one/app-page-one.component';
import { AppPageTwoComponent } from './app-page-two/app-page-two.component';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'page-one', component: AppPageOneComponent },
  { path: 'page-two', component: AppPageTwoComponent },
  { path: '', redirectTo: '/select-language', pathMatch: 'full' },
  { path: 'select-language', component: AppLanguageSelectComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppLanguageSelectComponent,
    AppPageOneComponent,
    AppPageTwoComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true }
    ),
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
