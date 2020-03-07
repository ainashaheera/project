import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoinvlntrFormPage } from './joinvlntr-form.page';

const routes: Routes = [
  {
    path: '',
    component: JoinvlntrFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoinvlntrFormPageRoutingModule {}
