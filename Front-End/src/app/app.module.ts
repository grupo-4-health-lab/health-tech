// Ng Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modules
import { IconModule, IconSetModule, IconSetService } from '@coreui/icons-angular';

// Services
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

// Page Modules
import { AuthModule } from './pages/auth/auth.module';
import { SystemModule } from './pages/system/system.module';

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
        IconSetModule.forRoot()
    ],
    providers: [
        UserService,
        AuthService,
        IconSetService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
