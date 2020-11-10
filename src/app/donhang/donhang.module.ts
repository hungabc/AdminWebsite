import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonhangComponent } from './donhang.component';
import {Routes,RouterModule} from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes:Routes=[
{path:'',component:DonhangComponent}
]

@NgModule({
  declarations: [DonhangComponent],
  imports: [
    CommonModule,SharedModule,RouterModule.forChild(routes)
  ]
})
export class DonhangModule { }
