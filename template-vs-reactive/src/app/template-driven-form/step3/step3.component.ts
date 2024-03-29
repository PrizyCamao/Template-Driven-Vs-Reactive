import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class Step3Component implements OnInit {

  public arrayTitle: string;
  public actualArray: string[];

  public parentForm: any;

  constructor(
    private readonly parentControl: ControlContainer
  ) { }

  public ngOnInit(): void {
    this.parentForm = this.parentControl;
    console.log('step 3', this.parentControl.value);
  }

  public addArray(): void {
    this.actualArray = [""];
    this.arrayTitle = "noicesArray";
  }

  public addFieldToArray(): void{
    this.actualArray.push("");
  }
}
