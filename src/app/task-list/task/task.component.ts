import { Component, Input, ViewEncapsulation, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class TaskComponent implements OnInit {

  @Input() task;

  constructor() { }

  @HostBinding('class.task--done')
  get done() {
    return this.task && this.task.done;
  }

  ngOnInit() {
  }

}
