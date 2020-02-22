import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {  ImplSchool } from 'src/app/model/School.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { SchoolDTO } from 'src/app/api/models';
import { ImplSchoolDTO } from 'src/app/model/ImplSchoolDTO.model';
import { ManagementControllerService } from 'src/app/api/services';

@Component({
    selector: 'app-school-page',
    templateUrl: './school-page.component.html',
    styleUrls: ['./school-page.component.scss'],
    animations: [routerTransition()]


})
export class SchoolPageComponent implements OnInit {
    constructor(public http: HttpClient, private modalService: NgbModal, private managementService: ManagementControllerService) { }
    schools: ImplSchool[];
    model: SchoolDTO = new ImplSchoolDTO('', '', '', '');
    closeResult: string;
    modalSchool: SchoolDTO = new ImplSchoolDTO('','','','');

    ngOnInit() {
        this.getAllSchools();
        this.managementService.getSchoolsUsingGET1().subscribe((a)=> console.log(a));
    }
    onSubmit() {
      this.managementService.createSchoolUsingPOST1(this.model).subscribe(()=> this.getAllSchools());
    }
    getAllSchools() {
        this.managementService.getSchoolsUsingGET1().subscribe((schools) => this.schools = schools);
    }
    deleteSchoolById(id: number){
      this.managementService.deleteSchoolUsingDELETE1(id).subscribe(()=> this.getAllSchools());
    }
    patchSchoolById(id: number, school: ImplSchool){
      let params  = { 
        newSchool: school,
        id: id}
      this.managementService.changeSchoolUsingPATCH1(params).subscribe(()=>this.getAllSchools()); 
    }
    open(school: ImplSchool,content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
          this.patchSchoolById(school.id,new ImplSchool(school.id, this.modalSchool.name,this.modalSchool.address,this.modalSchool.email, this.modalSchool.phoneNumber));
          this.modalSchool = new ImplSchoolDTO('','','','');
        }, (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
      }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
          return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
          return 'by clicking on a backdrop';
        } else {
          return  `with: ${reason}`;
        }
      }
}
