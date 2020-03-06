import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateVolunteerPage } from './update-volunteer.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateVolunteerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateVolunteerPageRoutingModule {}
