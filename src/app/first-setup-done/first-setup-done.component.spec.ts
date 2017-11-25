import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSetupDoneComponent } from './first-setup-done.component';

describe('FirstSetupDoneComponent', () => {
  let component: FirstSetupDoneComponent;
  let fixture: ComponentFixture<FirstSetupDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSetupDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSetupDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
