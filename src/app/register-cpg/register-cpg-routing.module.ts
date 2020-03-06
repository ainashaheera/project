import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterCpgPage } from './register-cpg.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterCpgPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterCpgPageRoutingModule {}
