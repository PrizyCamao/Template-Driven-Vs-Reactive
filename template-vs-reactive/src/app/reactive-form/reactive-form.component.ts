import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DataService } from '../data/data.service';
import { Finanzamt } from '../models';

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
      name: ['', { validators: Validators.required }],
      nr: [{value: '', disabled: true}, Validators.required],
    }, { updateOn: "blur" });

    // this.mainForm.addControl("subFinanzamt", this._formBuilder.group({
    //   name: ['', Validators.required],
    //   nr: ['', Validators.required],
    // }));

    this._dataService.getFinanzamt$().subscribe(data => {
      this.mainForm.patchValue(data);
    });
  }

  save() {
    this.mainForm.markAllAsTouched();
    console.log(this.mainForm.value);
    new Lol({id:1})
  }
}

class Lol {
  id: number;
  name: string;

  constructor(lol: Partial<Lol>) {
    Object.assign(this, lol);
  }
}
