// Ng Modules
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

// Services
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { ChartService } from './services/chart.service';

// Page Modules
import { AuthModule } from './modules/auth/auth.module';
import { SystemModule } from './modules/system/system.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SystemModule,
        AuthModule,
        IconModule,
        FormsModule,
        ReactiveFormsModule,
        IconSetModule.forRoot()
    ],
    providers: [
        UserService,
        AuthService,
        ChartService,
        IconSetService
    ],
    bootstrap: [
        AppComponent
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule { }
