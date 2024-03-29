import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Finanzamt } from 'src/app/models';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class Step2Component {

  @Input() public finanzamt: Finanzamt;
  @Output() public finanzamtChange = new EventEmitter<Finanzamt>();

  public updateValues(): void {
    this.finanzamtChange.emit(this.finanzamt);
  }
}
