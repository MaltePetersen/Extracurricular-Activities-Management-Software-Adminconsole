import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllNotVerifiedUserComponent } from './all-not-verified-user.component';

describe('AllNotVerifiedUserComponent', () => {
  let component: AllNotVerifiedUserComponent;
  let fixture: ComponentFixture<AllNotVerifiedUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllNotVerifiedUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllNotVerifiedUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
