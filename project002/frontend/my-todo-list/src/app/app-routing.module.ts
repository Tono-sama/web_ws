import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { TodoItemDetailComponent } from './todo-item-detail/todo-item-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: "items", component: TodoItemsComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "items/:id", component: TodoItemDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
