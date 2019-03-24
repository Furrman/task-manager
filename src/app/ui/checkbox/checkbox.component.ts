import { Component, ViewEncapsulation, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CheckboxComponent implements OnInit {

  @Input() label;
  @Input() checked;
  @Output() checkedChange = new EventEmitter();

  onCheckedChange(checked) {
    this.checkedChange.next(checked);
  }

  constructor() { }

  ngOnInit() {
  }

}
