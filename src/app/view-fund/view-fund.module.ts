import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewFundPageRoutingModule } from './view-fund-routing.module';

import { ViewFundPage } from './view-fund.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewFundPageRoutingModule
  ],
  declarations: [ViewFundPage]
})
export class ViewFundPageModule {}
