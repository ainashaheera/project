import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFundraiserPage } from './add-fundraiser.page';

const routes: Routes = [
  {
    path: '',
    component: AddFundraiserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFundraiserPageRoutingModule {}
