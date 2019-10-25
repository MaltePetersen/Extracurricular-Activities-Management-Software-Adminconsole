import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(
        public router: Router,
        public http: HttpClient
    ) { }
    userName: string;
    password: string;
    ngOnInit() {
        this.http.get
    }

    onLoggedin() {
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
        );
    }
}
