import { AfterSchoolCareDTO, AttendanceDTO, SimpleUserDTO } from '../api/models';

export class ImplCareDTO implements AfterSchoolCareDTO{
    attendances?: Array<AttendanceDTO>;
    closed?: boolean;
    endTime?: string;
    id?: number;
    name?: string;
    owner?: SimpleUserDTO;
    participatingSchool?: number;
    startTime?: string;
    type?: number;
    constructor(id: number, startTime: string, endTime: string, participatingSchool: number,attendances: Array<AttendanceDTO>,closed: boolean ,     name: string,  owner: SimpleUserDTO,
        type: number ) {
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