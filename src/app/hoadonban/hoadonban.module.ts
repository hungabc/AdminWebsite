import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoadonbanComponent } from './hoadonban.component';
import { ChitiethoadonbanComponent } from './chitiethoadonban/chitiethoadonban.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'primeng/api';
const routes:Routes=[
  {path:'',component:HoadonbanComponent}
]


@NgModule({
  declarations: [HoadonbanComponent,ChitiethoadonbanComponent],
  imports: [
    CommonModule,SharedModule,RouterModule.forChild(routes)
  ]
})
export class HoadonbanModule { }
