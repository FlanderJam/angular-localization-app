import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLanguageSelectComponent } from './app-language-select.component';

describe('AppLanguageSelectComponent', () => {
  let component: AppLanguageSelectComponent;
  let fixture: ComponentFixture<AppLanguageSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLanguageSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLanguageSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
