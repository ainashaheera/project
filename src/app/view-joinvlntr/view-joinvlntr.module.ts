import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewJoinvlntrPageRoutingModule } from './view-joinvlntr-routing.module';

import { ViewJoinvlntrPage } from './view-joinvlntr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewJoinvlntrPageRoutingModule
  ],
  declarations: [ViewJoinvlntrPage]
})
export class ViewJoinvlntrPageModule {}
