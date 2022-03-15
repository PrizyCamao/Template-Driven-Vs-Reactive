import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { TemplateDrivenFormComponent } from './template-driven-form.component';

const routes: Routes = [
  {
    path: '',
    component: TemplateDrivenFormComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateDrivenFormRoutingModule { }
