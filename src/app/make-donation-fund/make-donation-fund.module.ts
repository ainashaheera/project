import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakeDonationFundPageRoutingModule } from './make-donation-fund-routing.module';

import { MakeDonationFundPage } from './make-donation-fund.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakeDonationFundPageRoutingModule
  ],
  declarations: [MakeDonationFundPage]
})
export class MakeDonationFundPageModule {}
