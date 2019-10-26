import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderModule } from 'src/app/shared';
import { SchoolPageComponent } from './school-page.component';
import { SchoolPageRoutingModule } from './school-page-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, PageHeaderModule, FormsModule,  SchoolPageRoutingModule],
    declarations: [SchoolPageComponent]
})
export class SchoolPageModule {}
