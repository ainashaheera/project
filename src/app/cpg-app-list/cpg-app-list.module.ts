import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpgAppListPageRoutingModule } from './cpg-app-list-routing.module';

import { CpgAppListPage } from './cpg-app-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CpgAppListPageRoutingModule
  ],
  declarations: [CpgAppListPage]
})
export class CpgAppListPageModule {}
