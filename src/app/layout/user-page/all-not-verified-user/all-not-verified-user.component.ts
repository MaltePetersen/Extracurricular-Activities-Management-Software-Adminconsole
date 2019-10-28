import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/User.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-not-verified-user',
  templateUrl: './all-not-verified-user.component.html',
  styleUrls: ['./all-not-verified-user.component.scss']
})
export class AllNotVerifiedUserComponent implements OnInit {

 
  constructor(private http: HttpClient ) { }
  users: User[] = [];

  ngOnInit() {
    this.http.get<User[]>(`${environment.apiUrl}/api/management/not_enabled_users`).subscribe((users => this.users = users));
  }


}
