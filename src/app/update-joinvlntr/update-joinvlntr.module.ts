import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateJoinvlntrPageRoutingModule } from './update-joinvlntr-routing.module';

import { UpdateJoinvlntrPage } from './update-joinvlntr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateJoinvlntrPageRoutingModule
  ],
  declarations: [UpdateJoinvlntrPage]
})
export class UpdateJoinvlntrPageModule {}
