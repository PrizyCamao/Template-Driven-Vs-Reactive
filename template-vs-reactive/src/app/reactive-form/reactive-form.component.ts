import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from '../data/data.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  public mainForm: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _dataService: DataService
  ) { }

  ngOnInit() {
    this.mainForm = this._formBuilder.group({
      name: ['Name', { validators: Validators.required }],
      nr: ['Nr', { validators: Validators.required }],
    }, { updateOn: "blur" });

    this.mainForm.addControl("subFinanzamt", this._formBuilder.group({
      subName: ['sub Name', Validators.required],
      subNr: ['sub Nr', Validators.required],
    }));

    // this._dataService.getFinanzamt().subscribe(data => {
    //   this._formService.
    // });
  }

  save() {
    this.mainForm.markAllAsTouched();
    console.log(this.mainForm.value);
  }
}
