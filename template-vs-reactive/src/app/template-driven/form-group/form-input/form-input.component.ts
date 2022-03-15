import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.scss']
})
export class FormInputComponent implements OnInit {

  @Input() public value: string;
  @Output() public valueChange = new EventEmitter<string>();

  @Input() public name: string;
  @Input() public isPassword: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onBlur() {
    this.valueChange.emit(this.value);
  }

}
