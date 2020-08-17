import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { JoinvlntrFormPageRoutingModule } from './joinvlntr-form-routing.module';

import { JoinvlntrFormPage } from './joinvlntr-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    JoinvlntrFormPageRoutingModule
  ],
  declarations: [JoinvlntrFormPage]
})
export class JoinvlntrFormPageModule {}
