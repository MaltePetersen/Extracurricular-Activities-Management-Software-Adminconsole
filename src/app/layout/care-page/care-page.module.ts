import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared';
import { CarePageRoutingModule } from './care-page-routing.module';
import { CarePageComponent } from './care-page.component';

@NgModule({
    imports: [CommonModule, PageHeaderModule, CarePageRoutingModule],
    declarations: [CarePageComponent]
})
export class CarePageModule {}
