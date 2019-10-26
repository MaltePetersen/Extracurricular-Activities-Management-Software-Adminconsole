import { School } from './School.model';

export class Care {
    id: number;
    startTime: number;
    endTime: number;
    participatingSchool: School;
    employee: any;
    constructor(id: number, startTime: number, endTime: number, participatingSchool: School) {
        this.id = id;
        this.startTime = startTime;
        this.endTime = endTime;
        this.participatingSchool = participatingSchool;
    }
}