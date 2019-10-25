import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-care-page',
    templateUrl: './care-page.component.html',
    styleUrls: ['./care-page.component.scss'],   
     animations: [routerTransition()]


})
export class CarePageComponent implements OnInit {
    constructor(public http: HttpClient) {}
    testString: string;
    ngOnInit() {
        this.http.get(`${environment.apiUrl}/api/after_school_cares`).subscribe((afterSchoolCare) => this.testString = JSON.stringify(afterSchoolCare));
    }
}
