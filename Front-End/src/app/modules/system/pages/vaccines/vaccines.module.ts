// Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Components
import { CreateVaccinesComponent } from './create/create.page';
import { ListVaccinesComponent } from './list/list.page';
import { EditVaccinesComponent } from './edit/edit.page';
// Modules
import { IconModule } from '@coreui/icons-angular';
import { SharedModule } from 'src/app/shared/shared.module';

// Internal routes
const routes: Routes = [
  {
      path: '',
      component: ListVaccinesComponent
  },
  {
      path: 'create',
      component: CreateVaccinesComponent
  },
  {
      path: 'edit',
      component: EditVaccinesComponent
  },
  {
      path: 'list',
      redirectTo: '',
      pathMatch: 'prefix'
  }
];

@NgModule({
  declarations: [
    CreateVaccinesComponent,
    ListVaccinesComponent,
    EditVaccinesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    IconModule
  ],
  exports: [
      RouterModule
  ]
})
export class VaccinesModule { }
