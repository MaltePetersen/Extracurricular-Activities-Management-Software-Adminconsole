import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared';
import { SchoolPageComponent } from './school-page.component';
import { SchoolPageRoutingModule } from './school-page-routing.module';

@NgModule({
    imports: [CommonModule, PageHeaderModule, SchoolPageRoutingModule],
    declarations: [SchoolPageComponent]
})
export class SchoolPageModule {}
