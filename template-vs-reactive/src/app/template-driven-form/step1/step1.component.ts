import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Finanzamt } from 'src/app/models';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class Step1Component implements OnInit {

  @Input() public form: Finanzamt;
  @Output() private formChange = new EventEmitter<Finanzamt>();

  @Output() private step = new EventEmitter<number>();

  public parentForm: any;

  constructor(
    private readonly parentControl: ControlContainer
  ) {}

  ngOnInit() {
    this.parentForm = this.parentControl.control;
    console.log('step 1', this.parentControl.value);
  }

  public updateValues(): void {
    this.formChange.emit(this.form);
  }

  public nextStep(): void {
    this.step.emit(2);
  }
}
