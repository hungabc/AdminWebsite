import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaodiensuaComponent } from './giaodiensua.component';

describe('GiaodiensuaComponent', () => {
  let component: GiaodiensuaComponent;
  let fixture: ComponentFixture<GiaodiensuaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiaodiensuaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiaodiensuaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
