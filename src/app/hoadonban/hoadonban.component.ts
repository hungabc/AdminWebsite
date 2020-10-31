import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from '../lib/base-component';

@Component({
  selector: 'app-hoadonban',
  templateUrl: './hoadonban.component.html',
  styleUrls: ['./hoadonban.component.css']
})
export class HoadonbanComponent extends BaseComponent implements OnInit {
hoadon:any;
  constructor(injector:Injector) {
    super(injector);
  }

  ngOnInit(): void {
   
    this._api.get('/api/Hoadonban/get-all').takeUntil(this.unsubscribe).subscribe(res => {
      this.hoadon = res;
   
      setTimeout(() => {
        this.loadScripts();
      });
    }); 
  }

}
