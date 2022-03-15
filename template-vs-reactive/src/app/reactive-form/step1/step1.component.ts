import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  viewProviders: [{provide: ControlContainer, useExisting: FormGroupDirective}]
})
export class Step1Component implements OnInit {

  public parentForm: any;

  constructor(private readonly parentControl: ControlContainer) {}

  ngOnInit() {
    this.parentForm = this.parentControl.control;
    console.log('step 1', this.parentControl.value);
  }
}
