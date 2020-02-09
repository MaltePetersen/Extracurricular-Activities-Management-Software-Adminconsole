/* tslint:disable */
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationInterface } from './api-configuration';

import { EmployeeControllerService } from './services/employee-controller.service';
import { ManagementControllerService } from './services/management-controller.service';
import { ParentControllerService } from './services/parent-controller.service';
import { SchoolCoordinatorControllerService } from './services/school-coordinator-controller.service';
import { BasicErrorControllerService } from './services/basic-error-controller.service';
import { UserControllerService } from './services/user-controller.service';

/**
 * Provider for all Api services, plus ApiConfiguration
 */
@NgModule({
  imports: [
    HttpClientModule
  ],
  exports: [
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiConfiguration,
    EmployeeControllerService,
    ManagementControllerService,
    ParentControllerService,
    SchoolCoordinatorControllerService,
    BasicErrorControllerService,
    UserControllerService
  ],
})
export class ApiModule {
  static forRoot(customParams: ApiConfigurationInterface): ModuleWithProviders {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: {rootUrl: customParams.rootUrl}
        }
      ]
    }
  }
}
