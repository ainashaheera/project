import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddStoryPageRoutingModule } from './add-story-routing.module';

import { AddStoryPage } from './add-story.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddStoryPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddStoryPage]
})
export class AddStoryPageModule {}
