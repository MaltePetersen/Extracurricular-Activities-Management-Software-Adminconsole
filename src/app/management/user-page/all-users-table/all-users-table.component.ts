import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/User.model';
import { environment } from 'src/environments/environment';
import { ManagementControllerService } from 'src/app/api/services';
import { UserDTO } from 'src/app/api/models';

@Component({
  selector: 'app-all-users-table',
  templateUrl: './all-users-table.component.html',
  styleUrls: ['./all-users-table.component.scss']
})
export class AllUsersTableComponent implements OnInit {

  constructor(private http: HttpClient, private managementService: ManagementControllerService) { }
  users: Array<UserDTO> = [];

  ngOnInit() {
    this.managementService.getAllUsersUsingGET().subscribe(users => this.users = users);
  }

}
