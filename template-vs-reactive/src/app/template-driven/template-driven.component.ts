import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DataService } from '../data/data.service';
import { Finanzamt } from '../models';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss']
})
export class TemplateDrivenComponent {

  public finanzamt$ = this.dataService.getFinanzamt$();

  constructor(private dataService: DataService) {}

  onSubmitTemplateBased(finanzamt: Finanzamt) {
    console.log(finanzamt);
  }

  validator(finanzamt: Finanzamt) {
    return finanzamt.nr.length >= 0 && finanzamt.name.length >= 0;
  }
}
