import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleCarritoComponent } from './orders.component';

describe('DetalleCarritoComponent', () => {
  let component: DetalleCarritoComponent;
  let fixture: ComponentFixture<DetalleCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
