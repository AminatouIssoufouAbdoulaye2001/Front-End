import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseServicesDetailsComponent } from './purchase-services-details.component';

describe('PurchaseServicesDetailsComponent', () => {
  let component: PurchaseServicesDetailsComponent;
  let fixture: ComponentFixture<PurchaseServicesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseServicesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseServicesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
