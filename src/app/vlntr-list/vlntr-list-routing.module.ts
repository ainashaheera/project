import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VlntrListPage } from './vlntr-list.page';

const routes: Routes = [
  {
    path: '',
    component: VlntrListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VlntrListPageRoutingModule {}
