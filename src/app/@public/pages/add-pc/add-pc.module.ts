import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddPcRoutingModule } from './add-pc-routing.module';
import { AddPcComponent } from './add-pc.component';


@NgModule({
  declarations: [
    AddPcComponent
  ],
  imports: [
    CommonModule,
    AddPcRoutingModule
  ]
})
export class AddPcModule { }
