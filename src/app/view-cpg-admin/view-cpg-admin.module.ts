import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewCpgAdminPageRoutingModule } from './view-cpg-admin-routing.module';

import { ViewCpgAdminPage } from './view-cpg-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewCpgAdminPageRoutingModule
  ],
  declarations: [ViewCpgAdminPage]
})
export class ViewCpgAdminPageModule {}
