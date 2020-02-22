import { School, AfterSchoolCare, Attendance, User } from '../api/models';


export class ImplCare implements AfterSchoolCare{
    attendances?: Array<Attendance>;
    closed?: boolean;
    endTime?: string;
    id?: number;
    name?: string;
    owner?: User;
    participatingSchool?: School;
    startTime?: string;
    type?: 'AFTERNOON_CARE' | 'WORKING_GROUP' | 'REMEDIAL' | 'AMPLIFICATION';
    constructor(id: number, startTime: string, endTime: string, participatingSchool: School,attendances: Array<Attendance>,closed: boolean ,     name: string,  owner: User,
        type: 'AFTERNOON_CARE' | 'WORKING_GROUP' | 'REMEDIAL' | 'AMPLIFICATION' ) {
        this.id = id;
        this.startTime = startTime;
        this.endTime = endTime;
        this.participatingSchool = participatingSchool;
        this.attendances = attendances;
        this.closed = closed;
        this.name = name;
        this.owner = owner;
        this.type = type;

    }
}