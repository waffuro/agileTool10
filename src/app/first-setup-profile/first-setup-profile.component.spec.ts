import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstSetupProfileComponent } from './first-setup-profile.component';

describe('FirstSetupProfileComponent', () => {
  let component: FirstSetupProfileComponent;
  let fixture: ComponentFixture<FirstSetupProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstSetupProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstSetupProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
