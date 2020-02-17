import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarePageComponent } from './care-page.component';

describe('CarePageComponent', () => {
    let component: CarePageComponent;
    let fixture: ComponentFixture<CarePageComponent>;

    beforeEach(
        async(() => {
            TestBed.configureTestingModule({
                declarations: [CarePageComponent]
            }).compileComponents();
        })
    );

    beforeEach(() => {
        fixture = TestBed.createComponent(CarePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
