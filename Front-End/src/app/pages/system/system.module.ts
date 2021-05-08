// Module
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Components
import { HeaderTitleComponent } from './header-title/header-title.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SystemComponent } from './system.page';


@NgModule({
    declarations: [
        HeaderTitleComponent,
        MainContentComponent,
        SideMenuComponent,
        SystemComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class SystemModule { }
