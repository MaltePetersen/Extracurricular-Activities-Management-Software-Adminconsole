import { School } from './School.model';

export class CareDTO {
    startTime: number;
    endTime: number;
    participatingSchool: School;
    employee: any;
    constructor(startTime: number, endTime: number, participatingSchool: School, employee: any) {
        this.startTime = startTime;
        this.endTime = endTime; 
        this.participatingSchool = participatingSchool;
        this.employee = employee;
    }
}