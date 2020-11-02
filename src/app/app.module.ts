import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SanphamComponent } from './sanpham/sanpham.component';
import { DautrangComponent } from './dautrang/dautrang.component';
import { CuoitrangComponent } from './cuoitrang/cuoitrang.component';
import { LoaisanphamComponent } from './loaisanpham/loaisanpham.component';
import { KhachhangComponent } from './khachhang/khachhang.component';

import { NccComponent } from './ncc/ncc.component';
import { JwtInterceptor } from './lib/jwt.interceptor'; 
import { ErrorInterceptor } from './lib/error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    DautrangComponent,
    CuoitrangComponent,
    LoaisanphamComponent,
    KhachhangComponent,
    NccComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
