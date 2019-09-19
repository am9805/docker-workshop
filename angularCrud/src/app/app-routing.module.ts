import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CrudAddComponent } from './crud-add/crud-add.component';
import { CrudEditComponent } from './crud-edit/crud-edit.component';
import { CrudGetComponent } from './crud-get/crud-get.component';

const routes: Routes = [
  {
    path: '',
    component: CrudGetComponent
  },
  {
    path: 'student/create',
    component: CrudAddComponent
  },
  {
    path: 'student/edit/:id',
    component: CrudEditComponent
  },
  {
    path: 'student',
    component: CrudGetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
