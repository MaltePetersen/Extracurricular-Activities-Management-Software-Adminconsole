import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolPageComponent } from './school-page.component';

const routes: Routes = [
    {
        path: '',
        component: SchoolPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SchoolPageRoutingModule {}
