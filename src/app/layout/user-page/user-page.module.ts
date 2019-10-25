import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule } from 'src/app/shared';
import { UserPageRoutingModule } from './user-page-routing.module';
import { UserPageComponent } from './user-page.component';

@NgModule({
    imports: [CommonModule, PageHeaderModule, UserPageRoutingModule],
    declarations: [UserPageComponent]
})
export class UserPageModule {}
