import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared';
import { CarePageRoutingModule } from './care-page-routing.module';
import { CarePageComponent } from './care-page.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [CommonModule, PageHeaderModule, NgbModule,FormsModule, CarePageRoutingModule],
    declarations: [CarePageComponent]
})
export class CarePageModule {}
