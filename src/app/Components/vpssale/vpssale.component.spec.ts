import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VpssaleComponent } from './vpssale.component';

describe('VpssaleComponent', () => {
  let component: VpssaleComponent;
  let fixture: ComponentFixture<VpssaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VpssaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VpssaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
