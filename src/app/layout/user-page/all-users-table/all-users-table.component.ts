import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/User.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-all-users-table',
  templateUrl: './all-users-table.component.html',
  styleUrls: ['./all-users-table.component.scss']
})
export class AllUsersTableComponent implements OnInit {

  constructor(private http: HttpClient) { }
  users: User[] = [];

  ngOnInit() {
    this.http.get<User[]>(`${environment.apiUrl}/api/management/users`).subscribe((users => this.users = users));

  }

}
