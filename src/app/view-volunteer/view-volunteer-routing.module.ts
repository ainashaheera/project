import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewVolunteerPage } from './view-volunteer.page';

const routes: Routes = [
  {
    path: '',
    component: ViewVolunteerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewVolunteerPageRoutingModule {}
