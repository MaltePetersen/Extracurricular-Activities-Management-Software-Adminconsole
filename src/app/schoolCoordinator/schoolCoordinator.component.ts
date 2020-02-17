import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-schoolCoordinator',
    templateUrl: './schoolCoordinator.component.html',
    styleUrls: ['./schoolCoordinator.component.scss']
})
export class SchoolCoordinatorComponent implements OnInit {

    collapedSideBar: boolean;

    constructor() {}

    ngOnInit() {}

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
