export class School {
    id: number;
    name: string;
    address: string;
    email: string;
    phoneNumber: string;
    employees: any;
    schoolCoordinators: any;
    children: any;
    constructor(id: number, name: string, address: string, email: string, phoneNumber: string) {
        this.id = id;
        this.name = name; 
        this.address = address;
        this.email = email; 
        this.phoneNumber = phoneNumber;
    }
}