import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateStoryPageRoutingModule } from './update-story-routing.module';

import { UpdateStoryPage } from './update-story.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateStoryPageRoutingModule
  ],
  declarations: [UpdateStoryPage]
})
export class UpdateStoryPageModule {}
