import { AfterViewInit, Component, Injector, OnInit, Renderer2, ViewChild } from '@angular/core';
import { BaseComponent } from '../lib/base-component';
import { Observable } from 'rxjs';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/takeUntil';
import { FormBuilder, Validators } from '@angular/forms';
import { FileUpload } from 'primeng/fileupload';
import { HttpHeaders } from '@angular/common/http';
declare var $:any;
@Component({
  selector: 'app-sanpham',
  templateUrl: './sanpham.component.html',
  styleUrls: ['./sanpham.component.css']
})

export class SanphamComponent extends BaseComponent implements OnInit{
page:any;
pageSize:any;
list:any;
public items: any;
  public item: any;
totalItems:any;
public formdata: any;
public doneSetupForm: any;  
public showUpdateModal:any;
public isCreate:any;
public uploadedFiles: any[] = [];
allloai:any;
anhien1:any;
submitted = false;
@ViewChild(FileUpload, { static: false }) file_image: FileUpload;
  constructor(private fb: FormBuilder,injector:Injector) {
    super(injector);
  }
  ngOnInit(): void {
    this.allloai=[];
    this.page=1;
    this.pageSize=4;
  this.totalItems=0;
    this._route.params.subscribe(params => {
      this._api.post('/api/SanPham/sp-phan-trang', { page: this.page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
        this.list = res.data;
      console.log(this.list);
        this.totalItems = res.totalItems;
        }, err => { });       
   }); 
   this._api.get('/api/Loaisp/get-all').takeUntil(this.unsubscribe).subscribe(res => {
    this.allloai = res;
  }); 
  }
  loadPage(page) { 
    this._route.params.subscribe(params => {
 
      this._api.post('/api/SanPham/sp-phan-trang', { page: page, pageSize: this.pageSize}).takeUntil(this.unsubscribe).subscribe(res => {
        this.list = res.data;
        this.totalItems = res.totalItems;
        }, err => { });       
   });   
  }
  get f() { return this.formdata.controls; }

  onSubmit(value) {
    this.submitted = true;
    if (this.formdata.invalid) {
      return;
    } 
    if(this.isCreate) { 
      this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
        let data_image = data == '' ? null : data;
        let tmp = {
           hinh:data_image,
            macode: value.macode,
            tensp: value.tensp,
            gia: value.gia,
            magiamgia: value.magiamgia,
            soluongton: value.soluong,
            ngaynhap: value.ngaynhap,
            mota: value.mota,
            anhien:value.anhien,
            maloai:value.maloai        
          };
        this._api.post('/api/SanPham/them-SP',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          console.log(res);
          alert('Thêm thành công');
          this.closeModal();
          });
      });
    } else { 
      this.getEncodeFromImage(this.file_image).subscribe((data: any): void => {
        let data_image = data == '' ? null : data;
        let tmp = {
           hinh:data_image,
           macode: value.macode,
           tensp: value.tensp,
           gia: value.gia,
           magiamgia: value.magiamgia,
           soluongton: value.soluong,
           ngaynhap: value.ngaynhap,
           mota: value.mota,
           anhien:value.anhien,
           maloai:value.maloai  ,
           masp:this.item.masp,          
          };
        this._api.post('/api/SanPham/update-SP',tmp).takeUntil(this.unsubscribe).subscribe(res => {
          alert('Cập nhật thành công');
          this.closeModal();
          });
      });
    }
   
  } 

  onDelete(row) { 
    this._api.get('/api/SanPham/delete-SP/'+row.masp).takeUntil(this.unsubscribe).subscribe(res => {
      alert('Xóa thành công');
      this.loadPage(1);
      });
  }

  Reset() {  
    this.item = null;
    this.formdata = this.fb.group({
      'macode': ['', Validators.required],
      'tensp': ['', Validators.required],
      'gia': ['',Validators.required],
      'magiamgia': [''],
      'soluong': [0, Validators.required],
      'ngaynhap': ['', Validators.required],
      'mota': [''],
      'anhien':[''],
      'maloai':['',Validators.required]
    }); 
  }

  createModal() {
    this.doneSetupForm = false;
    this.showUpdateModal = true;
    this.isCreate = true;
    this.item = null;
    setTimeout(() => {
      $('#sanphamModal').modal('toggle');
      this.formdata = this.fb.group({
        'macode': ['', Validators.required],
        'tensp': ['', Validators.required],
        'gia': ['',Validators.required],
        'magiamgia': [''],
        'soluong': ['', Validators.required],
        'ngaynhap': ['', Validators.required],
        'mota': [''],
        'anhien':[''],
        'maloai':['',Validators.required]
      });
      this.formdata.get('ngaynhap').setValue(this.today);
      this.doneSetupForm = true;
    });
  }
  

  public openUpdateModal(row) {
    this.doneSetupForm = false;
    this.showUpdateModal = true; 
    this.isCreate = false;
    setTimeout(() => {
      $('#sanphamModal').modal('toggle');
      this._api.get('/api/SanPham/'+ row.masp).takeUntil(this.unsubscribe).subscribe((res:any) => {
        this.item = res; 
        let ngaynhap = new Date(this.item.ngaysinh);
          this.formdata = this.fb.group({
            // 'masp':[this.item.masp, Validators.required],
            'macode': [this.item.macode, Validators.required],
            'tensp': [this.item.tensp, Validators.required],
            'gia': [this.item.gia,Validators.required],
            'magiamgia': [this.item.magiamgia],
            'soluong': [this.item.soluong, Validators.required],
            'ngaynhap': [ngaynhap, Validators.required],
            'mota': [this.item.mota],
            'anhien':[this.item.anhien],
            'maloai':[this.item.maloai,Validators.required]
          }); 
          this.doneSetupForm = true;
        }); 
    }, 700);
  }

  closeModal() {
    $('#sanphamModal').closest('.modal').modal('hide');
  }

}
