// Ng Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
        AuthModule
    ],
    providers: [
        UserService,
        AuthService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
