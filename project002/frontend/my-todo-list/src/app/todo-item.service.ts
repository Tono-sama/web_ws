import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { TodoItem } from './interface/todo-item';
import { TODOITEMS } from './test/test-data/mock-todo-items';

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {

  constructor() { }

  getTodoItems(): Observable<TodoItem[]> {
    const todoItems = of(TODOITEMS);
    return todoItems;
  }
}
