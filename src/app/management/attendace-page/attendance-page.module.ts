import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared';
import { AttendancePageComponent } from './attendance-page.component';
import { AttendancePageRoutingModule } from './attendance-page-routing.module';

@NgModule({
    imports: [CommonModule, PageHeaderModule, AttendancePageRoutingModule],
    declarations: [AttendancePageComponent]
})
export class AttendancePageModule { }
