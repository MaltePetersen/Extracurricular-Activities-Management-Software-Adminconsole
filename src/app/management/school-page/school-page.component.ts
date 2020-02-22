import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { School } from 'src/app/model/School.model';
import { SchoolDTO } from 'src/app/model/SchoolDTO.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-school-page',
    templateUrl: './school-page.component.html',
    styleUrls: ['./school-page.component.scss'],
    animations: [routerTransition()]


})
export class SchoolPageComponent implements OnInit {
    constructor(public http: HttpClient, private modalService: NgbModal) { }
    schools: School[];
    model: SchoolDTO = new SchoolDTO('', '', '', '');
    closeResult: string;
    modalSchool: SchoolDTO = new SchoolDTO('','','','');

    ngOnInit() {
        this.getAllSchools();
    }
    onSubmit() {
        this.http.post<SchoolDTO>(`${environment.apiUrl}/api/management/school`, this.model).subscribe(() => this.getAllSchools());
    }
    getAllSchools() {
        this.http.get<School[]>(`${environment.apiUrl}/api/management/schools`).subscribe((schools) => this.schools = schools);
    }
    deleteSchoolById(id: number){
        this.http.delete<number>(`${environment.apiUrl}/api/management/school/${id}`).subscribe(() => this.getAllSchools());
    }
    patchSchoolById(id: number, school: School){
        this.http.patch<School>(`${environment.apiUrl}/api/management/school/${id}`,school).subscribe(() => this.getAllSchools());
    }
    open(school: School,content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
          this.patchSchoolById(school.id,new School(school.id, this.modalSchool.name,this.modalSchool.address,this.modalSchool.email, this.modalSchool.phoneNumber));
          this.modalSchool = new SchoolDTO('','','','');
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
