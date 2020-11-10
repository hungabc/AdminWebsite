import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoadonbanComponent } from './hoadonban.component';
import {Routes,RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes:Routes=[
  {path:'',component:HoadonbanComponent}
]


@NgModule({
  declarations: [HoadonbanComponent],
  imports: [
    CommonModule,SharedModule,RouterModule.forChild(routes)
  ]
})
export class HoadonbanModule { }
