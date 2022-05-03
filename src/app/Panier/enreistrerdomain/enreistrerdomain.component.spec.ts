import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnreistrerdomainComponent } from './enreistrerdomain.component';

describe('EnreistrerdomainComponent', () => {
  let component: EnreistrerdomainComponent;
  let fixture: ComponentFixture<EnreistrerdomainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnreistrerdomainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnreistrerdomainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
