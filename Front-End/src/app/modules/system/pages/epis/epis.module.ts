// Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Components
import { ListEPIsComponent } from './list/list.page';
import { CreateEPIsComponent } from './create/create.page';
import { EditEPIsComponent } from './edit/edit.page';
import { HistoryEPIsComponent } from './history/history.page';

// Modules
import { IconModule } from '@coreui/icons-angular';
import { SharedModule } from 'src/app/shared/shared.module';

// Internal routes
const routes: Routes = [
  {
      path: '',
      component: ListEPIsComponent
  },
  {
      path: 'create',
      component: CreateEPIsComponent
  },
  {
      path: 'edit',
      component: EditEPIsComponent
  },
  {
      path: 'history',
      component: HistoryEPIsComponent
  },
  {
      path: 'list',
      redirectTo: '',
      pathMatch: 'prefix'
  }
];

@NgModule({
  declarations: [
    ListEPIsComponent,
    CreateEPIsComponent,
    EditEPIsComponent,
    HistoryEPIsComponent
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
export class EpisModule { }
