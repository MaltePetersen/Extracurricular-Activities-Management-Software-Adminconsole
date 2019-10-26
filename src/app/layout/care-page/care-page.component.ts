import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Care } from 'src/app/model/Care.model';
import { School } from 'src/app/model/School.model';

@Component({
    selector: 'app-care-page',
    templateUrl: './care-page.component.html',
    styleUrls: ['./care-page.component.scss'],   
     animations: [routerTransition()]


})
export class CarePageComponent implements OnInit {
    constructor(public http: HttpClient) {}
    afterSchoolCares: Care[];
    schools: School[];

    ngOnInit() {
        this.http.get<Care[]>(`${environment.apiUrl}/api/after_school_cares`).subscribe((afterSchoolCare) => this.afterSchoolCares = afterSchoolCare);
        this.http.get<School[]>(`${environment.apiUrl}/api/schools`).subscribe((a) => this.schools = a);

    }
}
