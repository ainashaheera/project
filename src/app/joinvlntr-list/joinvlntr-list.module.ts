import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoinvlntrListPageRoutingModule } from './joinvlntr-list-routing.module';

import { JoinvlntrListPage } from './joinvlntr-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoinvlntrListPageRoutingModule
  ],
  declarations: [JoinvlntrListPage]
})
export class JoinvlntrListPageModule {}
