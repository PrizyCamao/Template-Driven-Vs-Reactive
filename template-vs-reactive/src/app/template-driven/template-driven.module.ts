import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenRoutingModule } from './template-driven-routing.module';
import { TemplateDrivenComponent } from './template-driven.component';
import { FormsModule } from '@angular/forms';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormInputComponent } from './form-group/form-input/form-input.component';
import { ButtonsComponent } from '../buttons/buttons.component';


@NgModule({
  declarations: [
    TemplateDrivenComponent,
    FormGroupComponent,
    FormInputComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    TemplateDrivenRoutingModule,
    FormsModule
  ]
})
export class TemplateDrivenModule { }
