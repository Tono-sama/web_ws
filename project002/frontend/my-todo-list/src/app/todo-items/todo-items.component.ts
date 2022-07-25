import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interface/todo-item';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  todoItem: TodoItem = {
    id: 0,
    title: "dummy todo item",
    detail: "comment",
    checked: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}
