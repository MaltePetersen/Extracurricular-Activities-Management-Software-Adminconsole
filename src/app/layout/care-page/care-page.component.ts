import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Care } from 'src/app/model/Care.model';
import { School } from 'src/app/model/School.model';
import { CareDTO } from 'src/app/model/CareDTO.model';

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
    model = new CareDTO(124,312,new School(15,'test','test','test','test'),'test');

    ngOnInit() {
        this.http.get<Care[]>(`${environment.apiUrl}/api/after_school_cares`).subscribe((afterSchoolCares) => this.afterSchoolCares = afterSchoolCares);
        this.http.get<School[]>(`${environment.apiUrl}/api/schools`).subscribe((a) => this.schools = a);
    }
    onSubmit(){
        console.log('Backend functionality missing');
    }
}
