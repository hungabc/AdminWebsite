import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { DautrangComponent } from './dautrang/dautrang.component';
import { CuoitrangComponent } from './cuoitrang/cuoitrang.component';
import { LoaisanphamComponent } from './loaisanpham/loaisanpham.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { HoadonbanComponent } from './hoadonban/hoadonban.component';
import { NccComponent } from './ncc/ncc.component';
import { DonhangComponent } from './donhang/donhang.component';
import { ChitietdonhangComponent } from './donhang/chitietdonhang/chitietdonhang.component';
import { ChitiethoadonbanComponent } from './hoadonban/chitiethoadonban/chitiethoadonban.component';

@NgModule({
  declarations: [
    AppComponent,
    SanphamComponent,
    DautrangComponent,
    CuoitrangComponent,
    LoaisanphamComponent,
    KhachhangComponent,
    HoadonbanComponent,
    NccComponent,
    DonhangComponent,
    ChitietdonhangComponent,
    ChitiethoadonbanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
