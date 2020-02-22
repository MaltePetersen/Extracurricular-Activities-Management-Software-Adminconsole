import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from './management.component';

const routes: Routes = [
    {
        path: '',
        component: ManagementComponent,
        children: [
            { path: '', redirectTo: 'user-page', pathMatch: 'prefix' },
            { path: 'user-page', loadChildren: () => import('./user-page/user-page.module').then(m => m.UserPageModule) },
            { path: 'school-page', loadChildren: () => import('./school-page/school-page.module').then(m => m.SchoolPageModule) },
            { path: 'care-page', loadChildren: () => import('./care-page/care-page.module').then(m => m.CarePageModule) },
            { path: 'attendance-page', loadChildren: () => import('./attendace-page/attendance-page.module').then(m => m.AttendancePageModule) }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagementRoutingModule {}
