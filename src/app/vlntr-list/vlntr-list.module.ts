import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VlntrListPageRoutingModule } from './vlntr-list-routing.module';

import { VlntrListPage } from './vlntr-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VlntrListPageRoutingModule
  ],
  declarations: [VlntrListPage]
})
export class VlntrListPageModule {}
