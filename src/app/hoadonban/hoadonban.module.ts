import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoadonbanComponent } from './hoadonban.component';
import { ChitiethoadonbanComponent } from './chitiethoadonban/chitiethoadonban.component';



@NgModule({
  declarations: [HoadonbanComponent,ChitiethoadonbanComponent],
  imports: [
    CommonModule
  ]
})
export class HoadonbanModule { }
