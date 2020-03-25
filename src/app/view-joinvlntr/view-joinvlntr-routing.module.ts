import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewJoinvlntrPage } from './view-joinvlntr.page';

const routes: Routes = [
  {
    path: '',
    component: ViewJoinvlntrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewJoinvlntrPageRoutingModule {}
