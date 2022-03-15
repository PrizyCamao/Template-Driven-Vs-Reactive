import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormComponent } from './reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { PrettyPrintPipe } from '../prettyprint.pipe';
import { Step3Component } from './step3/step3.component';


@NgModule({
  declarations: [
    ReactiveFormComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    PrettyPrintPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    ReactiveFormsModule
  ]
})
export class ReactiveComponentFormModule { }
