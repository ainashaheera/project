import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewVolunteerPageRoutingModule } from './view-volunteer-routing.module';

import { ViewVolunteerPage } from './view-volunteer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewVolunteerPageRoutingModule
  ],
  declarations: [ViewVolunteerPage]
})
export class ViewVolunteerPageModule {}
