import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPcRoutingModule } from './add-pc-routing.module';
import { AddPcComponent } from './add-pc.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddPcComponent
  ],
  imports: [
    CommonModule,
    AddPcRoutingModule,
    FormsModule
  ]
})
export class AddPcModule { }
