import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from '../shared/services/authentication-service.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(
        public router: Router,
        public http: HttpClient,
        public auth: AuthenticationService
    ) { }
    userName: string;
    password: string;
    ngOnInit() {
    }

    onLoggedin() {
        this.auth.login(this.userName, this.password).subscribe((auth) => {
            if (auth)
                this.router.navigateByUrl('dashboard');
        });
        /* 
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + btoa(`${this.userName}:${this.password}`)
            })
        };
        this.http.get<string[]>('https://fjoerde.herokuapp.com/login', httpOptions).subscribe((authorities) => {
            if (authorities.includes('ROLE_MANAGEMENT')) {
                localStorage.setItem('isLoggedin', 'true');
                console.log('works');
                this.router.navigateByUrl('dashboard');
            }
        }
        );*/
    }
}
