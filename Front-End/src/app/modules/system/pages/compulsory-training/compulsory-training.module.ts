// Module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Page Components
import { CreateCompulsoryTrainingComponent } from './create/create.page';
import { EditCompulsoryTrainingComponent } from './edit/edit.page';
import { ListCompulsoryTrainingComponent } from './list/list.page';

// Modules
import { IconModule } from '@coreui/icons-angular';
import { SharedModule } from 'src/app/shared/shared.module';

// Internal routes
const routes: Routes = [
  {
      path: '',
      component: ListCompulsoryTrainingComponent
  },
  {
      path: 'create',
      component: CreateCompulsoryTrainingComponent
  },
  {
      path: 'edit',
      component: EditCompulsoryTrainingComponent
  },
  {
      path: 'list',
      redirectTo: '',
      pathMatch: 'prefix'
  }
];

@NgModule({
  declarations: [
      ListCompulsoryTrainingComponent,
      CreateCompulsoryTrainingComponent,
      EditCompulsoryTrainingComponent
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
  
export class CompulsoryTrainingModule { }
