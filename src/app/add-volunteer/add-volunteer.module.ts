import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AddVolunteerPageRoutingModule } from './add-volunteer-routing.module';

import { AddVolunteerPage } from './add-volunteer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, 
    AddVolunteerPageRoutingModule
  ],
  declarations: [AddVolunteerPage]
})
export class AddVolunteerPageModule {}
