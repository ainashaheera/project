import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateFundPage } from './update-fund.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateFundPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateFundPageRoutingModule {}
