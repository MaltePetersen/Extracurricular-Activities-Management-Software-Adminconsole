import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-school-page',
    templateUrl: './school-page.component.html',
    styleUrls: ['./school-page.component.scss'],   
     animations: [routerTransition()]


})
export class SchoolPageComponent implements OnInit {
    constructor(public http: HttpClient) {}
    testString: string;
    ngOnInit() {
        this.http.get(`${environment.apiUrl}/api/schools`).subscribe((a) => this.testString = JSON.stringify(a));
    }
}
