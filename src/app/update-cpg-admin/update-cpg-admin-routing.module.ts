import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCpgAdminPage } from './update-cpg-admin.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCpgAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCpgAdminPageRoutingModule {}
