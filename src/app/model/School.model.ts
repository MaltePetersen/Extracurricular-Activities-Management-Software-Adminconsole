import { School, AfterSchoolCare, User } from '../api/models';

export class ImplSchool implements School{
address?: string;
afterSchoolCares?: Array<AfterSchoolCare>;
children?: Array<User>;
email?: string;
employees?: Array<User>;
id?: number;
name?: string;
phoneNumber?: string;
schoolCoordinators?: Array<User>;
    constructor(id: number, name: string, address: string, email: string, phoneNumber: string) {
        this.id = id;
        this.name = name; 
        this.address = address;
        this.email = email; 
        this.phoneNumber = phoneNumber;
    }
}