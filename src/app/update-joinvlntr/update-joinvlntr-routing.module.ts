import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateJoinvlntrPage } from './update-joinvlntr.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateJoinvlntrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateJoinvlntrPageRoutingModule {}
