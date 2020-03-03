import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ImplCare } from 'src/app/model/Care.model';
import { ImplSchool } from 'src/app/model/School.model';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AfterSchoolCare, AfterSchoolCareDTO, SimpleUserDTO } from 'src/app/api/models';
import { ImplCareDTO } from 'src/app/model/CareDTO.model';
import { ManagementControllerService } from 'src/app/api/services';
import * as moment from 'moment';

@Component({
  selector: 'app-care-page',
  templateUrl: './care-page.component.html',
  styleUrls: ['./care-page.component.scss'],
  animations: [routerTransition()]


})
export class CarePageComponent implements OnInit {
  constructor(public http: HttpClient, private modalService: NgbModal, private managementService: ManagementControllerService) { }
  afterSchoolCares: AfterSchoolCareDTO[];
  schools: ImplSchool[];
  model = new ImplCareDTO(1, '2020-03-02T12:15:44.177Z', '2020-03-02T12:15:44.177Z', 1, null, false, '', null, 1);
  closeResult: string;
  modalCare: AfterSchoolCareDTO = new ImplCareDTO(1, '2020-03-02T12:15:44.177Z', '2020-03-02T12:15:44.177Z', 1, null, false, '', null, 1);
  possibleOwners: SimpleUserDTO[] = [];
  //TODO: Wie muss die Abfrage aussehen, damit ich AfterschoolCares erstellen kann
  ngOnInit() {
    this.getAllAfterSchoolCares();
    this.managementService.getSchoolsUsingGET1().subscribe(schools => this.schools = schools);
    this.managementService.getAllUsersUsingGET().subscribe( users =>    this.possibleOwners = users);
    this.managementService.addAfterSchoolCareUsingPOST(this.model).subscribe(() => this.getAllAfterSchoolCares())

  }
  onSubmit() {
    
    this.managementService.addAfterSchoolCareUsingPOST(this.model).subscribe(() => this.getAllAfterSchoolCares())
  }
  getAllAfterSchoolCares() {
    this.managementService.getAllAfterSchoolCareServicesUsingGET().subscribe((afterSchoolCares) => {
      this.afterSchoolCares = afterSchoolCares;
      console.log(this.afterSchoolCares)}
    );
  }
  deleteById(id: number) {
    this.managementService.deleteAfterSchoolCareUsingDELETE1(id).subscribe(() => this.getAllAfterSchoolCares());
  }
  patchById(id: number, afterSchoolCare: AfterSchoolCareDTO) {
    let params = {
      id: id,
      afterSchoolCareDTO: afterSchoolCare
    }
    this.managementService.patchAfterSchoolCareUsingPATCH(params).subscribe(() => this.getAllAfterSchoolCares());
  }
  open(care: AfterSchoolCare, content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      this.patchById(care.id, new ImplCareDTO(care.id, this.modalCare.startTime, this.modalCare.endTime, 1, [], false, '', null, 1));
      this.modalCare = new ImplCareDTO(1, '124', '312', 1, null, false, '', null, 1);
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
      return `with: ${reason}`;
    }
  }
}
