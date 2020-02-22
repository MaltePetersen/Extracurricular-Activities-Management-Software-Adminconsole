import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {  ImplCare } from 'src/app/model/Care.model';
import { ImplSchool } from 'src/app/model/School.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AfterSchoolCare, AfterSchoolCareDTO } from 'src/app/api/models';
import { ImplCareDTO } from 'src/app/model/CareDTO.model';

@Component({
    selector: 'app-care-page',
    templateUrl: './care-page.component.html',
    styleUrls: ['./care-page.component.scss'],
    animations: [routerTransition()]


})
export class CarePageComponent implements OnInit {
    constructor(public http: HttpClient, private modalService: NgbModal) { }
    afterSchoolCares: AfterSchoolCare[];
    schools: ImplSchool[];
    model = new ImplCareDTO(1,'124', '312', 1,null, false, '', null , 1);
    closeResult: string;
    modalCare: AfterSchoolCareDTO = new ImplCareDTO(1,'124', '312', 1,null, false, '', null , 1);

    ngOnInit() {
        this.getAllAfterSchoolCares();
  
        this.http.get<ImplSchool[]>(`${environment.apiUrl}/api/management/schools`).subscribe((a) => this.schools = a);
    }
    onSubmit() {
        console.log('Backend functionality missing');
    }
    getAllAfterSchoolCares() {
        this.http.get<AfterSchoolCare[]>(`${environment.apiUrl}/api/management/afterSchoolCare`).subscribe((afterSchoolCares) => this.afterSchoolCares = afterSchoolCares );   
    }
    deleteById(id: number) {
        this.http.delete<number>(`${environment.apiUrl}/api/management/afterSchoolCare/${id}`).subscribe(() => this.getAllAfterSchoolCares());
    }
    patchById(id: number, afterSchoolCare: AfterSchoolCare){
        this.http.patch<ImplSchool>(`${environment.apiUrl}/api/management/afterSchoolCare/${id}`,afterSchoolCare).subscribe(() => this.getAllAfterSchoolCares());
    }
    open(care: AfterSchoolCare,content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
          this.patchById(care.id,new ImplCare(care.id, this.modalCare.startTime,this.modalCare.endTime,new ImplSchool(1,'','','',''),[],false,'',null,'AFTERNOON_CARE'));
          this.modalCare = new ImplCareDTO(1,'124', '312', 1,null, false, '', null , 1);
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
