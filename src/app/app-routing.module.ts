import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodolistComponent } from 'e2e/typescripts/todolist.component';
import { TasklistComponent } from 'e2e/typescripts/tasklist.component';

const routes: Routes = [{path: '', component: TodolistComponent}
 ,{path: 'task', component: TasklistComponent}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 
