import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./shared";

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: "management",
    loadChildren: () =>
      import("./management/management.module").then(m => m.ManagementModule),
    canActivate: [AuthGuard],
    data: {
      role: "ROLE_MANAGEMENT"
    }
  },
  {
    path: "schoolcoordinator",
    loadChildren: () =>
      import("./schoolCoordinator/schoolCoordinator.module").then(
        m => m.SchoolCoordinatorModule
      ),
    canActivate: [AuthGuard],
    data: {
      role: "ROLE_SCHOOLCOORDINATOR"
    }
  },
  {
    path: "login",
    loadChildren: () => import("./login/login.module").then(m => m.LoginModule),
    canActivate: [AuthGuard],
    data: {
      role: "NULL"
    }
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./signup/signup.module").then(m => m.SignupModule),
    canActivate: [AuthGuard],
    data: {
      role: "NULL"
    }
  },
  {
    path: "error",
    loadChildren: () =>
      import("./server-error/server-error.module").then(
        m => m.ServerErrorModule
      ),
    canActivate: [AuthGuard],
    data: {
      role: "NULL"
    }
  },
  {
    path: "access-denied",
    loadChildren: () =>
      import("./access-denied/access-denied.module").then(
        m => m.AccessDeniedModule
      ),
    canActivate: [AuthGuard],
    data: {
      role: "NULL"
    }
  },
  {
    path: "not-found",
    loadChildren: () =>
      import("./not-found/not-found.module").then(m => m.NotFoundModule),
    canActivate: [AuthGuard],
    data: {
      role: "NULL"
    }
  },
  { path: "**", redirectTo: "not-found" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
