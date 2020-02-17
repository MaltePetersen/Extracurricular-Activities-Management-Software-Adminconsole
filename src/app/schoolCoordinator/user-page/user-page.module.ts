import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageHeaderModule, StatModule } from 'src/app/shared';
import { UserPageRoutingModule } from './user-page-routing.module';
import { UserPageComponent } from './user-page.component';
import { AllNotVerifiedUserComponent } from './all-not-verified-user/all-not-verified-user.component';
import { AllUsersTableComponent } from './all-users-table/all-users-table.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [CommonModule, PageHeaderModule,StatModule, FormsModule, UserPageRoutingModule],
    declarations: [UserPageComponent, AllNotVerifiedUserComponent, AllUsersTableComponent, RegisterComponent]
})
export class UserPageModule {}
