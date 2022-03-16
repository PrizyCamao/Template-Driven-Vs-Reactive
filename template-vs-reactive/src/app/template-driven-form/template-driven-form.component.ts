import { Component, OnInit, ViewChild } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { DataService } from '../data/data.service';
import { Finanzamt } from '../models';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.scss']
})
export class TemplateDrivenFormComponent implements OnInit {

  public finanzamt: Finanzamt;
  public loading = true;

  constructor(
    private readonly _dataService: DataService
  ) { }

  ngOnInit(): void {
    this._dataService.getFinanzamt$().subscribe(data => {
      this.finanzamt = data;
      this.loading = false;
    });
  }

  public onSubmit(): void {
    console.log("OK");
  }
}
