// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Services
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

// Pages
import { LoginComponent } from './pages/login/login.page';
import { PasswordResetComponent } from './pages/password-reset/password-reset.page';
import { NotFoundComponent } from './pages/not-found/not-found.page';
import { SystemComponent } from './pages/system/system.page';

// Child-components
import { SendEmailComponent } from './pages/password-reset/send-email/send-email.component';
import { ApplyCodeComponent } from './pages/password-reset/apply-code/apply-code.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        PasswordResetComponent,
        NotFoundComponent,
        SendEmailComponent,
        ApplyCodeComponent,
        SystemComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [
        UserService,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
