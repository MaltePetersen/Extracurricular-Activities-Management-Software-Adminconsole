import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserDTO } from 'src/app/model/UserDTO.model';

@Component({
  selector: 'app-all-not-verified-user',
  templateUrl: './all-not-verified-user.component.html',
  styleUrls: ['./all-not-verified-user.component.scss']
})
export class AllNotVerifiedUserComponent implements OnInit {

 
  constructor(private http: HttpClient ) { }
  users: UserDTO[] = [];

  ngOnInit() {
    this.http.get<UserDTO[]>(`${environment.apiUrl}/api/management/not_enabled_users`).subscribe((users => this.users = users));
  }


}
