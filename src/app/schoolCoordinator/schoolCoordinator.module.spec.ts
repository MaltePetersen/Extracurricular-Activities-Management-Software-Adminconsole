import { SchoolCoordinatorModule } from './schoolCoordinator.module';

describe('SchoolCoordinatorModule', () => {
    let schoolCoordinatorModule: SchoolCoordinatorModule;

    beforeEach(() => {
        schoolCoordinatorModule = new SchoolCoordinatorModule();
    });

    it('should create an instance', () => {
        expect(schoolCoordinatorModule).toBeTruthy();
    });
});
