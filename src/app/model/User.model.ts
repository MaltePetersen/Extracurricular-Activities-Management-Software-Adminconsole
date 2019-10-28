export class User{
    id: number;
    username: string; 
    password: string;
    fullname:string;
    role: string;
    email: string;
    address: string;
    phonenumber: string;
    iban: string;
    schoolClass: string;
    employeesSchools: any;
    schoolCoordinatorsSchools: any;
    childSchool: any;
    verified: boolean;
    authorities: any;
    enabled: boolean;
    accountNonExpired: boolean;
    accountNonLocked: boolean; 
    credentialsNonExpired: boolean;
}