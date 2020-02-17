import { CarePageModule } from './care-page.module';

describe('CarePageModule', () => {
    let carePageModule: CarePageModule;

    beforeEach(() => {
        carePageModule = new CarePageModule();
    });

    it('should create an instance', () => {
        expect(carePageModule).toBeTruthy();
    });
});
