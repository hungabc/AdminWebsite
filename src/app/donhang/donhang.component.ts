import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../lib/base-component';

@Component({
  selector: 'app-donhang',
  templateUrl: './donhang.component.html',
  styleUrls: ['./donhang.component.css']
})
export class DonhangComponent extends BaseComponent implements OnInit {
tg:any;
  donhangs:any;
index:any;
size: any;
trangthai:any;
total:any;
dstt:any;
  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this.dstt=[
      {name:"chưa xác nhận"},
      {name:"đã xác nhận"},
      {name:"đã đóng gói"},
      {name:"đang giao hàng"},
      {name:"đã nhận hàng"},
      {name:"đã thanh toán"},
      {name:"đã hủy đơn"}
    ]
    this.index=1,this.size=12;this.total=0;
    this._api.get('/api/Donhang/get-all/'+this.index+'/'+this.size).takeUntil(this.unsubscribe).subscribe(res => {
      this.tg = res;
      this.donhangs=this.tg.data;
      this.total=this.tg.totalItems;
      console.log(this.donhangs);
      setTimeout(() => {
        this.loadScripts();
      });
    }); 
   
  }
  reload(){
    this.index=1,this.size=12;this.total=0;
    this._api.get('/api/Donhang/get-all/'+this.index+'/'+this.size).takeUntil(this.unsubscribe).subscribe(res => {
      this.tg = res;
      this.donhangs=this.tg.data;
      this.total=this.tg.totalItems;
      console.log(this.donhangs);
    
    }); 
   
  }
  loadPage(page){
    this.index=1,this.size=12;this.total=0;
    this._api.get('/api/Donhang/get-all/'+page+'/'+this.size).takeUntil(this.unsubscribe).subscribe(res => {
      this.tg = res;
      this.donhangs=this.tg.data;
      this.total=this.tg.totalItems;
      console.log(this.donhangs);
    
    }); 
  }
  getbytt(trangthai){
    this.index=1;this.size=1000;this.total=0;
    if(trangthai=='all') this.reload();
    else {
      this._api.get('/api/Donhang/get-all/'+this.index+'/'+this.size+'/'+trangthai).takeUntil(this.unsubscribe).subscribe(res => {
        this.tg = res;
        this.donhangs=this.tg.data;
        this.total=this.tg.totalItems;
      
      }); 
    }
  }
  thaydoitrangthai(masp){
    if(confirm('bạn có chắc không?')){
    this._api.get('/api/Donhang/change-stt/'+masp).takeUntil(this.unsubscribe).subscribe(res => {
    }); 
    this.reload();}
  }
  huydon(masp){
    if(confirm('bạn có chắc chắn muốn hủy đơn không?')){
      this._api.get('/api/Donhang/cancel/'+masp).takeUntil(this.unsubscribe).subscribe(res => {
      }); 
      this.reload();}
  }

}
