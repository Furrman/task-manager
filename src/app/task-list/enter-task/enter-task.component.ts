import { Component, ViewEncapsulation, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-enter-task',
  templateUrl: './enter-task.component.html',
  styleUrls: ['./enter-task.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EnterTaskComponent implements OnInit {

  constructor() { }

  @Output() taskEntered = new EventEmitter();

  enterTask(titleInput) {
    this.taskEntered.next(titleInput.value);
    titleInput.value = '';
    titleInput.focus();
  }

  ngOnInit() {
  }

}
