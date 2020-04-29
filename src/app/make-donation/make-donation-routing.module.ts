import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakeDonationPage } from './make-donation.page';

const routes: Routes = [
  {
    path: '',
    component: MakeDonationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakeDonationPageRoutingModule {}
