import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interface/todo-item';
import { TodoItemService } from '../todo-item.service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  todoItems?: TodoItem[];
  selectedItem?: TodoItem;

  constructor(private todoItemService: TodoItemService) { }

  ngOnInit(): void {
    this.getTodoItems();
  }

  private getTodoItems(): void {
    this.todoItemService.getTodoItems()
      .subscribe(todoItems => this.todoItems = todoItems);
  }

  onSelect(item: TodoItem) {
    this.selectedItem = item;
  }

}
