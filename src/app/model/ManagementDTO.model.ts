export class ManagementDTO {
    name: string;
    password: string;
    authData?: string;
    constructor(name: string, password: string, authData: string) {
        this.name = name;
        this.password = password;
        this.authData = authData;

    }
    setAuthData(authData: string) {
        this.authData = authData;
    }
}