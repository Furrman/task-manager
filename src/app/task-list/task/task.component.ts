import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class TaskComponent implements OnInit {

  constructor() { }

  @Input() task;

  ngOnInit() {
  }

}
