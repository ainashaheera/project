import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateFundPageRoutingModule } from './update-fund-routing.module';

import { UpdateFundPage } from './update-fund.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateFundPageRoutingModule
  ],
  declarations: [UpdateFundPage]
})
export class UpdateFundPageModule {}
