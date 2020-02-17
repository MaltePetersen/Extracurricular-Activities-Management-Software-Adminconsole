import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SchoolCoordinatorComponent } from './schoolCoordinator.component';
import { SchoolCoordinatorModule } from './schoolCoordinator.module';

describe('SchoolCoordinatorComponent', () => {
  let component: SchoolCoordinatorComponent;
  let fixture: ComponentFixture<SchoolCoordinatorComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [
          SchoolCoordinatorModule,
          RouterTestingModule,
        ]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolCoordinatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
