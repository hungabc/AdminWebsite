import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoadonbanComponent } from './hoadonban.component';

describe('HoadonbanComponent', () => {
  let component: HoadonbanComponent;
  let fixture: ComponentFixture<HoadonbanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoadonbanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoadonbanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
