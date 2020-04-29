import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FundListPageRoutingModule } from './fund-list-routing.module';

import { FundListPage } from './fund-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FundListPageRoutingModule
  ],
  declarations: [FundListPage]
})
export class FundListPageModule {}
