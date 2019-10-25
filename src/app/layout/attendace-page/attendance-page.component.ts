import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-attendance-page',
    templateUrl: './attendance-page.component.html',
    styleUrls: ['./attendance-page.component.scss'],   
     animations: [routerTransition()]


})
export class AttendancePageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
