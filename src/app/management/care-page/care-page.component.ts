import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Care } from 'src/app/model/Care.model';
import { School } from 'src/app/model/School.model';
import { CareDTO } from 'src/app/model/CareDTO.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-care-page',
    templateUrl: './care-page.component.html',
    styleUrls: ['./care-page.component.scss'],
    animations: [routerTransition()]


})
export class CarePageComponent implements OnInit {
    constructor(public http: HttpClient, private modalService: NgbModal) { }
    afterSchoolCares: Care[];
    schools: School[];
    model = new CareDTO(124, 312, new School(15, 'test', 'test', 'test', 'test'), 'test');
    closeResult: string;
    modalCare: CareDTO = new CareDTO(0,0,new School(15, 'test', 'test', 'test', 'test'),'');

    ngOnInit() {
        this.getAllAfterSchoolCares();
        this.http.get<School[]>(`${environment.apiUrl}/api/management/schools`).subscribe((a) => this.schools = a);
    }
    onSubmit() {
        console.log('Backend functionality missing');
    }
    getAllAfterSchoolCares() {
        this.http.get<Care[]>(`${environment.apiUrl}/api/management/afterSchoolCare`).subscribe((afterSchoolCares) => this.afterSchoolCares = afterSchoolCares );   
    }
    deleteById(id: number) {
        this.http.delete<number>(`${environment.apiUrl}/api/management/afterSchoolCare/${id}`).subscribe(() => this.getAllAfterSchoolCares());
    }
    patchById(id: number, afterSchoolCare: Care){
        this.http.patch<School>(`${environment.apiUrl}/api/management/afterSchoolCare/${id}`,afterSchoolCare).subscribe(() => this.getAllAfterSchoolCares());
    }
    open(care: Care,content) {
        this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
          this.closeResult = `Closed with: ${result}`;
          this.patchById(care.id,new Care(care.id, this.modalCare.startTime,this.modalCare.endTime,this.modalCare.participatingSchool));
          this.modalCare = new CareDTO(0,0,new School(15, 'test', 'test', 'test', 'test'),'');
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
