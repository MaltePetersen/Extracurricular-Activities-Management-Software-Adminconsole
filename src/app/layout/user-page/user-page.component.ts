import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss'],   
     animations: [routerTransition()]


})
export class UserPageComponent implements OnInit {
    constructor() {}

    ngOnInit() {}
}
