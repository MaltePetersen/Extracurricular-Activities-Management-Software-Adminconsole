import { SchoolDTO } from 'src/app/api/models/school-dto';
 
export class ImplSchoolDTO implements SchoolDTO {
    address?: string;
    email?: string;
    id?: number;
    name?: string;
    phoneNumber?: string;
    constructor( name: string, address: string, email: string, phoneNumber: string) {
        this.name = name;
        this.address =address;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}