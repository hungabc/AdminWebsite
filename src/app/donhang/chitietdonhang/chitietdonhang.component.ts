import { Component, Injector, OnInit } from '@angular/core';
import { BaseComponent } from 'src/app/lib/base-component';

@Component({
  selector: 'app-chitietdonhang',
  templateUrl: './chitietdonhang.component.html',
  styleUrls: ['./chitietdonhang.component.css']
})
export class ChitietdonhangComponent extends BaseComponent implements OnInit {
  chitiet:any;
  constructor(injector:Injector) {
    super(injector);
   }

  ngOnInit(): void {
   //this.chitiet = '';
    this._route.params.subscribe(params => {
      let id = params['id'];
      console.log(id);
      this._api.get('/api/Donhang/get-ct/'+id).takeUntil(this.unsubscribe).subscribe(res => {
        this.chitiet = res[0];
        console.log(this.chitiet);
        setTimeout(() => {
          this.loadScripts();
        });
      }); 
    });
   console.log('123343');

  }
 
}
  