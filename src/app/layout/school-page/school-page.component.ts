import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-school-page',
    templateUrl: './school-page.component.html',
    styleUrls: ['./school-page.component.scss'],   
     animations: [routerTransition()]


})
export class SchoolPageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
