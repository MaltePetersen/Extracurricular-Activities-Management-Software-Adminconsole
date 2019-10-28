export class UserDTO {
    userType: string;
    username: string;
    password: string;
    email: string;
    fullname: string;
    phoneNumber: string;
    subject: string;
    iban: string;
    address: string;
    schoolClass: string;
    isSchoolCoordinator: boolean;


    constructor(userType: string, username: string, password: string, email: string, fullname: string, phoneNumber: string, subject: string, iban: string, address: string, schoolClass: string, isSchoolCoordinator: boolean) {
        this.username = username;
        this.userType = userType;
        this.password = password;
        this.email = email;
        this.fullname = fullname;
        this.phoneNumber = phoneNumber;
        this.subject = subject;
        this.iban = iban;
        this.address = address;
        this.schoolClass = schoolClass;
        this.isSchoolCoordinator = isSchoolCoordinator;
    }
}