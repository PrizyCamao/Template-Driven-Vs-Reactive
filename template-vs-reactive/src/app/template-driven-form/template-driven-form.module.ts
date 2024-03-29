import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDrivenFormRoutingModule } from './template-driven-form-routing.module';
import { TemplateDrivenFormComponent } from './template-driven-form.component';
import { FormsModule } from '@angular/forms';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';


@NgModule({
  declarations: [
    TemplateDrivenFormComponent,
    Step1Component,
    Step2Component,
    Step3Component
  ],
  imports: [
    CommonModule,
    TemplateDrivenFormRoutingModule,
    FormsModule
  ]
})
export class TemplateDrivenFormModule { }
