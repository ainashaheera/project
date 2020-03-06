import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CpgAppListPage } from './cpg-app-list.page';

const routes: Routes = [
  {
    path: '',
    component: CpgAppListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CpgAppListPageRoutingModule {}
