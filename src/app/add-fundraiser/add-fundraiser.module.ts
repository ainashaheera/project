import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFundraiserPageRoutingModule } from './add-fundraiser-routing.module';

import { AddFundraiserPage } from './add-fundraiser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFundraiserPageRoutingModule
  ],
  declarations: [AddFundraiserPage]
})
export class AddFundraiserPageModule {}
