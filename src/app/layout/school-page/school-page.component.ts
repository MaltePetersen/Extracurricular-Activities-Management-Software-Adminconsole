import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { School } from 'src/app/model/School.model';
import { SchoolDTO } from 'src/app/model/SchoolDTO.model';

@Component({
    selector: 'app-school-page',
    templateUrl: './school-page.component.html',
    styleUrls: ['./school-page.component.scss'],
    animations: [routerTransition()]


})
export class SchoolPageComponent implements OnInit {
    constructor(public http: HttpClient) { }
    schools: School[];
    model: SchoolDTO = new SchoolDTO('name', 'addresse', 'email', 'phoneNumber');
    ngOnInit() {
        this.getAllSchools();
    }
    newSchool() {
        this.model = new School(2, 'fwe', 'addrgergwesse', 'emDQWFail', 'phoneNuDWQmber');
    }
    onSubmit() {
        this.http.post<SchoolDTO>(`${environment.apiUrl}/api/schools`, this.model).subscribe(() => this.getAllSchools());
    }
    getAllSchools() {
        this.http.get<School[]>(`${environment.apiUrl}/api/schools`).subscribe((schools) => this.schools = schools);
    }
    deleteSchoolById(id: number){
        this.http.delete<number>(`${environment.apiUrl}/api/schools/${id}`).subscribe(() => this.getAllSchools());
    }
    patchSchoolById(id: number, school: School){
        this.http.patch<School>(`${environment.apiUrl}/api/schools/${id}`,school).subscribe(() => this.getAllSchools());
    }

}
