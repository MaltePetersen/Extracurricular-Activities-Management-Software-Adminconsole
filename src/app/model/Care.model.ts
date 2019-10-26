import { School } from './School.model';

export class Care{
    id: number; 
    startTime: number; 
    endTime: number;
    participatingSchool: School;
    employee: any; 
}