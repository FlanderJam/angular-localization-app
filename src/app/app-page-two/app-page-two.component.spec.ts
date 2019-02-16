import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPageTwoComponent } from './app-page-two.component';

describe('AppPageTwoComponent', () => {
  let component: AppPageTwoComponent;
  let fixture: ComponentFixture<AppPageTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppPageTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
