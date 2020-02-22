import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { UserDTO } from 'src/app/model/UserDTO.model';
import { ManagementControllerService } from 'src/app/api/services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private http: HttpClient, private managementService: ManagementControllerService) { }
  model: UserDTO = new UserDTO('TEACHER', '', '', '','', '', '', '', '', '', false);
  ngOnInit() {


  }
 createUser(){
   let params = {
    userDTO: this.model
   }
   this.managementService.registerUsingPOST(params).subscribe(a => console.table(a));

 }
 onSubmit(){
   this.createUser();
 }

}
