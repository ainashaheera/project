import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RegisterCpgPageRoutingModule } from './register-cpg-routing.module';

import { RegisterCpgPage } from './register-cpg.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule, 
    RegisterCpgPageRoutingModule
  ],
  declarations: [RegisterCpgPage]
})
export class RegisterCpgPageModule {}
