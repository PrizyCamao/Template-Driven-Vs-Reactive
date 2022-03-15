import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'reactive-form',
    loadChildren: () => import('./reactive-form/reactive-form.module').then(m => m.ReactiveComponentFormModule)
  },
  {
    path: 'template-driven-form',
    loadChildren: () => import('./template-driven-form/template-driven-form.module').then(m => m.TemplateDrivenFormModule)
  },
  // {
  // 	path: 'template-driven',
  // 	loadChildren: () => import('./template-driven/template-driven.module').then(m => m.TemplateDrivenModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
