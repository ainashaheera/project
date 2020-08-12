import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeDonationFundPage } from './make-donation-fund.page';

const routes: Routes = [
  {
    path: '',
    component: MakeDonationFundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeDonationFundPageRoutingModule {}
