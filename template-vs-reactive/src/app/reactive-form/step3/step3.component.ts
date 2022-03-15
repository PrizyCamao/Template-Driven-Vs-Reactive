import { Component, OnInit } from '@angular/core';
import { ControlContainer, FormArray, FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  viewProviders: [{ provide: ControlContainer, useExisting: FormGroupDirective }]
})
export class Step3Component implements OnInit {

  public formArray: FormArray;
  public arrayName: string;

  private _parentGroup: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
    public formGroupDirective: FormGroupDirective
  ) { }

  ngOnInit(): void {
    this._parentGroup = this.formGroupDirective.control as FormGroup;
  }

  public addArray(): void {
    const name = "noicesArray";

    this._parentGroup.addControl(name, this._formBuilder.array([""]));
    this.formArray = this._parentGroup.get(name) as FormArray;

    this.arrayName = name;
  }

  public addFieldToArray(): void {
    this.formArray.push(this._formBuilder.control(""));
  }
}
