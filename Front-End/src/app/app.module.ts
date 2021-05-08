// Ng Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

// Page Components
import { LoginComponent } from './pages/login/login.page';
import { NotFoundComponent } from './pages/not-found/not-found.page';

// Page Modules
import { SystemModule } from './pages/system/system.module';
import { PasswordResetModule } from './pages/password-reset/password-reset.module';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NotFoundComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SystemModule,
        PasswordResetModule
    ],
    providers: [
        UserService,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
