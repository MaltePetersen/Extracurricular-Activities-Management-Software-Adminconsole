import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarePageComponent } from './care-page.component';

const routes: Routes = [
    {
        path: '',
        component: CarePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarePageRoutingModule {}
