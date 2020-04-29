import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FundListPage } from './fund-list.page';

const routes: Routes = [
  {
    path: '',
    component: FundListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FundListPageRoutingModule {}
