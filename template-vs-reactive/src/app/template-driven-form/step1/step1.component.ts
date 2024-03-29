import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { Finanzamt } from 'src/app/models';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  viewProviders: [{provide: ControlContainer, useExisting: NgForm}]
})
export class Step1Component {

  @Input() public finanzamt: Finanzamt;
  @Output() private finanzamtChange = new EventEmitter<Finanzamt>();

  public updateValues(): void {
    this.finanzamtChange.emit(this.finanzamt);
  }
}
