import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonhangComponent } from './donhang.component';
import { ChitietdonhangComponent } from './chitietdonhang/chitietdonhang.component';
import {Routes,RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ChitiethoadonbanComponent } from '../hoadonban/chitiethoadonban/chitiethoadonban.component';

const routes:Routes=[
{path:'',component:DonhangComponent},
{path: 'chi-tiet/:id', component:ChitiethoadonbanComponent}
]

@NgModule({
  declarations: [DonhangComponent,ChitietdonhangComponent],
  imports: [
    CommonModule,SharedModule,RouterModule.forChild(routes)
  ]
})
export class DonhangModule { }
