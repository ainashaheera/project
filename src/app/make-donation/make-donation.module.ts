import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeDonationPageRoutingModule } from './make-donation-routing.module';

import { MakeDonationPage } from './make-donation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeDonationPageRoutingModule
  ],
  declarations: [MakeDonationPage]
})
export class MakeDonationPageModule {}
