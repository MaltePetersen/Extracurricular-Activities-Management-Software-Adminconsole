import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from 'src/app/model/User.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-page',
    templateUrl: './user-page.component.html',
    styleUrls: ['./user-page.component.scss'],
    animations: [routerTransition()]


})
export class UserPageComponent implements OnInit {
    constructor(private router: Router) { }
    ngOnInit() {
    }
    navigate(url: string) {
        this.router.navigateByUrl(`user-page/${url}`);

    }
}
