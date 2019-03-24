import { Injectable } from '@angular/core';

@Injectable()
export class TaskListService {

  public tasks;

  constructor() {
    this.tasks = [
      {title: 'Task 1', done: false},
      {title: 'Task 2', done: false},
      {title: 'Task 3', done: true},
      {title: 'Task 4', done: false}
    ];
  }
}
