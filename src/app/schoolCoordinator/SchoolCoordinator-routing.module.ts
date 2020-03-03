import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolCoordinatorComponent } from './schoolCoordinator.component';

const routes: Routes = [
    {
        path: '',
        component: SchoolCoordinatorComponent,
        children: [
            { path: 'care-page', loadChildren: () => import('./care-page/care-page.module').then(m => m.CarePageModule) },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SchoolCoordinatorRoutingModule {}
