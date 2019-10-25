import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { BasicAuthInterceptor } from './shared/intercepters/BasicAuthInterceptor';
import { ErrorInterceptor } from './shared/intercepters/ErrorInterceptor';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [AppComponent],
    providers: [AuthGuard,
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },],
    bootstrap: [AppComponent]
})
export class AppModule {}
