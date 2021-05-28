// Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Components
import { ListPage } from './list/list.page';
import { CreatePage } from './create/create.page';
import { EditPage } from './edit/edit.page';

// Modules
import { IconModule } from '@coreui/icons-angular';
import { SharedModule } from 'src/app/shared/shared.module';

// Internal routes
const routes: Routes = [
  {
      path: 'list',
      component: ListPage
  },
  {
      path: 'create',
      component: CreatePage
  },
  {
      path: 'edit',
      component: EditPage
  },
  {
      path: '',
      redirectTo: 'list',
      pathMatch: 'full'
  }
];

@NgModule({
  declarations: [CreatePage, EditPage, ListPage],
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
export class FunctionsRisksModule { }
