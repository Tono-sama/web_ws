import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../interface/todo-item';

@Component({
  selector: 'app-todo-item-detail',
  templateUrl: './todo-item-detail.component.html',
  styleUrls: ['./todo-item-detail.component.css']
})
export class TodoItemDetailComponent implements OnInit {

  @Input() todoItem?: TodoItem;

  constructor() { }

  ngOnInit(): void {
  }

}
