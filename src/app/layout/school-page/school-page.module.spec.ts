import { SchoolPageModule } from './school-page.module';

describe('SchoolPageModule', () => {
    let schoolPageModule: SchoolPageModule;

    beforeEach(() => {
        schoolPageModule = new SchoolPageModule();
    });

    it('should create an instance', () => {
        expect(schoolPageModule).toBeTruthy();
    });
});
