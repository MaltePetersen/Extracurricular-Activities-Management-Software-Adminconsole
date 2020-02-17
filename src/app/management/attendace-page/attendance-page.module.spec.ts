import { AttendancePageModule } from './attendance-page.module';

describe('AttendancePageModule', () => {
    let attendancePageModule: AttendancePageModule;

    beforeEach(() => {
        attendancePageModule = new AttendancePageModule();
    });

    it('should create an instance', () => {
        expect(attendancePageModule).toBeTruthy();
    });
});
