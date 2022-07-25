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
    return of(TODOITEMS);
  }

  getTodoItem(id: number): Observable<TodoItem | undefined> {
    return of(TODOITEMS.find(item => item.id===id));
  }
}
