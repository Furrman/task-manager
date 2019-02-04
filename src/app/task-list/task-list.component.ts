import { Component, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TaskListComponent implements OnInit {
  private tasks;

  constructor() {
    this.tasks = [
      { title: 'Zadanie 1', done: false },
      { title: 'Zadanie 2', done: true }
    ];
  }

  ngOnInit() {
  }

}
