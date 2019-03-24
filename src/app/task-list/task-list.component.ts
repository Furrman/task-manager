import { Component, ViewEncapsulation, Inject, OnInit } from '@angular/core';

import { TaskListService } from './task-list-service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [TaskListService]
})
export class TaskListComponent implements OnInit {

  public taskListService;
  public taskFilterList;
  public selectedTaskFilter;

  constructor(@Inject(TaskListService) taskListService) {
    this.taskListService = taskListService;
    this.taskFilterList = ['all', 'open', 'done'];
    this.selectedTaskFilter = 'all';
  }

  addTask(title) {
    this.taskListService.tasks.push({
      title,
      done: false
    });
  }

  getFilteredTasks() {
    return this.taskListService.tasks ?
      this.taskListService.tasks.filter((task) => {
        if (this.selectedTaskFilter === 'all') {
          return true;
        } else if (this.selectedTaskFilter === 'open') {
          return !task.done;
        } else if (this.selectedTaskFilter === 'done') {
          return task.done;
        } else {
          return false;
        }
      }) : [];
  }

  ngOnInit() {
  }

}
