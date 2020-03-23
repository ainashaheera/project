import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateStoryPage } from './update-story.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateStoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateStoryPageRoutingModule {}
