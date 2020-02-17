import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserDTO } from 'src/app/model/UserDTO.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }
  model: UserDTO = new UserDTO('TEACHER', '', '', '','', '', '', '', '', '', false);
  ngOnInit() {


  }
 createUser(){
  this.http.post<UserDTO>(`${environment.apiUrl}/api/management/register`, this.model)
  .subscribe(a => console.table(a));
 }
 onSubmit(){
   this.createUser();
 }

}
