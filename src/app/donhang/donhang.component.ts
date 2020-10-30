import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../lib/base-component';

@Component({
  selector: 'app-donhang',
  templateUrl: './donhang.component.html',
  styleUrls: ['./donhang.component.css']
})
export class DonhangComponent extends BaseComponent implements OnInit {
donhangs:any;
  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
    this._api.get('/api/Donhang/get-all').takeUntil(this.unsubscribe).subscribe(res => {
      this.donhangs = res;
      setTimeout(() => {
        this.loadScripts();
      });
    }); 
   
  }
  reload(){
    this._api.get('/api/Donhang/get-all').takeUntil(this.unsubscribe).subscribe(res => {
      this.donhangs = res;
    
    }); 
   
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
