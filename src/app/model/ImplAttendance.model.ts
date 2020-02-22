import { AfterSchoolCare, User, Attendance } from '../api/models';

export class ImplAttendance implements Attendance {
  afterSchoolCare?: AfterSchoolCare;
  allowedToLeaveAfterFinishedHomework?: boolean;
  arrivalTime?: string;
  child?: User;
  closed?: boolean;
  id?: number;
  latestArrivalTime?: string;
  leaveTime?: string;
  note?: string;
  predefinedLeaveTime?: string;
constructor(afterSchoolCare: AfterSchoolCare,allowedToLeaveAfterFinishedHomework: boolean,arrivalTime: string,  child: User, closed: boolean, id: number,  latestArrivalTime: string,
    leaveTime: string, note: string, predefinedLeaveTime: string ){
        this.afterSchoolCare = afterSchoolCare;
        this.allowedToLeaveAfterFinishedHomework = allowedToLeaveAfterFinishedHomework;
        this.arrivalTime = arrivalTime;
        this.child = child;
        this.closed = closed;
        this.id = id;
        this.latestArrivalTime = latestArrivalTime;
        this.leaveTime = leaveTime;
        this.note = note;
        this.predefinedLeaveTime = predefinedLeaveTime;
}
}
