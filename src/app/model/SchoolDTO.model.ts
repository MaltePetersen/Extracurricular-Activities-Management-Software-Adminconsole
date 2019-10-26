export class SchoolDTO {
    name: string;
    address: string;
    email: string;
    phoneNumber: string;
    employees: any;
    schoolCoordinators: any;
    children: any;
    constructor( name: string, address: string, email: string, phoneNumber: string) {
        this.name = name; 
        this.address = address;
        this.email = email; 
        this.phoneNumber = phoneNumber;
    }
}