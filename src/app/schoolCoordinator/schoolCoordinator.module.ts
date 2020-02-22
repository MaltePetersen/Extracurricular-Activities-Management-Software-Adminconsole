import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";

import { SchoolCoordinatorRoutingModule } from "./SchoolCoordinator-routing.module";
import { SchoolCoordinatorComponent } from "./schoolCoordinator.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { HeaderComponent } from "./components/header/header.component";

@NgModule({
  imports: [CommonModule, SchoolCoordinatorRoutingModule, NgbDropdownModule],
  declarations: [SchoolCoordinatorComponent, SidebarComponent, HeaderComponent]
})
export class SchoolCoordinatorModule {}
