import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TodoItem } from '../interface/todo-item';
import { TodoItemService } from '../todo-item.service';

@Component({
  selector: 'app-todo-item-detail',
  templateUrl: './todo-item-detail.component.html',
  styleUrls: ['./todo-item-detail.component.css']
})
export class TodoItemDetailComponent implements OnInit {

  todoItem: TodoItem | undefined;

  constructor(
    private route: ActivatedRoute,
    private todoItemService: TodoItemService,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getItems()
  }

  private getItems(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.todoItemService.getTodoItem(id)
      .subscribe(item => this.todoItem = item)
  }

}
