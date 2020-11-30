import { Component, Injector, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { BaseComponent } from '../lib/base-component';
declare var $:any;
@Component({
  selector: 'app-donhang',
  templateUrl: './donhang.component.html',
  styleUrls: ['./donhang.component.css']
})
export class DonhangComponent extends BaseComponent implements OnInit {
tg:any;
  donhangs:any;
  donhang:any;
index:any;
size: any;
trangthai:any;
total:any;
dstt:any;
totalUnit:any;
totalPrice:any;
public formdata:any;
public doneSetupForm:any;
public submitted=false;
  constructor(private fb:FormBuilder,injector:Injector) {
    super(injector);
  }
  get f() { return this.formdata.controls; }
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
    this.index=1,this.size=2;this.total=0;
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
    this.index=1,this.size=2;this.total=0;
    this._api.get('/api/Donhang/get-all/'+this.index+'/'+this.size).takeUntil(this.unsubscribe).subscribe(res => {
      this.tg = res;
      this.donhangs=this.tg.data;
      this.total=this.tg.totalItems;
      console.log(this.donhangs);
    
    }); 
   
  }
  loadPage(page){
    this.index=1,this.size=2;this.total=0;
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
  getByID(id){
   
    $('#chitietModal').modal('toggle');
    this._api.get('/api/Donhang/get-by-id/'+ id).takeUntil(this.unsubscribe).subscribe((res:any) => {
      this.donhang = res; 
      this.totalUnit=0;this.totalPrice=0;
      this.donhang.chitiet.forEach(element => {
        this.totalUnit+=element.soluong;
        this.totalPrice+=element.gia*element.soluong;
      });
      this.formdata = this.fb.group({
        // 'masp':[this.item.masp, Validators.required],
        'madh': [this.donhang.madh, Validators.required],
        'tendangnhap': [this.donhang.tendangnhap, Validators.required],
        'ngaydathang': [this.donhang.ngaydathang, Validators.required],
        'ngayyeucau': [this.donhang.ngayyeucau, Validators.required],
        'tenkhachang': [this.donhang.tenkh, Validators.required],
        'diachinguoinhan': [this.donhang.diachinguoinhan, Validators.required],
        'email': [this.donhang.email, Validators.required],
        'sdt': [this.donhang.sdt, Validators.required],
      });
      }); 
  }

}
