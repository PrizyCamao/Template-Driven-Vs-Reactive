import { Component, Input, OnInit } from '@angular/core';
import { Finanzamt } from 'src/app/models';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {

  @Input() public title: string;
  @Input() public finanzamt: Finanzamt;

  constructor() { }

  ngOnInit(): void {
  }

}
