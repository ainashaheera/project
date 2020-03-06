import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCpgAdminPageRoutingModule } from './update-cpg-admin-routing.module';

import { UpdateCpgAdminPage } from './update-cpg-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UpdateCpgAdminPageRoutingModule
  ],
  declarations: [UpdateCpgAdminPage]
})
export class UpdateCpgAdminPageModule {}
