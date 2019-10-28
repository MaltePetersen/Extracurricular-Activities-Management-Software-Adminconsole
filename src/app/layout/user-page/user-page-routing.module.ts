import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPageComponent } from './user-page.component';
import { AllUsersTableComponent } from './all-users-table/all-users-table.component';
import { AllNotVerifiedUserComponent } from './all-not-verified-user/all-not-verified-user.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [

    { path: '', component: UserPageComponent },
    { path: 'allusers', component: AllUsersTableComponent },
    { path: 'allnotverified', component: AllNotVerifiedUserComponent },
    { path: 'register', component: RegisterComponent }





];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserPageRoutingModule { }
