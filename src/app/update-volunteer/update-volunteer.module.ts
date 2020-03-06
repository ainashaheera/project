import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateVolunteerPageRoutingModule } from './update-volunteer-routing.module';

import { UpdateVolunteerPage } from './update-volunteer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateVolunteerPageRoutingModule
  ],
  declarations: [UpdateVolunteerPage]
})
export class UpdateVolunteerPageModule {}
