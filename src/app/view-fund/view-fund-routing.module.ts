import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewFundPage } from './view-fund.page';

const routes: Routes = [
  {
    path: '',
    component: ViewFundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewFundPageRoutingModule {}
