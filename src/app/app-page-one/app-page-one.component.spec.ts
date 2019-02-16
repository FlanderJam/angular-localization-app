import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPageOneComponent } from './app-page-one.component';

describe('AppPageOneComponent', () => {
  let component: AppPageOneComponent;
  let fixture: ComponentFixture<AppPageOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPageOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
