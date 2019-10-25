import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-care-page',
    templateUrl: './care-page.component.html',
    styleUrls: ['./care-page.component.scss'],   
     animations: [routerTransition()]


})
export class CarePageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
