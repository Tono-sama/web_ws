import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { TodoItemDetailComponent } from './todo-item-detail/todo-item-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemsComponent,
    TodoItemDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
