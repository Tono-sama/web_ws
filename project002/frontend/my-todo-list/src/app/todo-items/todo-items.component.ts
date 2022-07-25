import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interface/todo-item';
import { TODOITEMS } from '../test/test-data/mock-todo-items';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  todoItems = TODOITEMS;
  selectedItem?: TodoItem;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(item: TodoItem) {
    this.selectedItem = item;
  }

}
