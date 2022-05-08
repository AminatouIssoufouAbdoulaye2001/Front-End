import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbonnementaddComponent } from './abonnementadd.component';

describe('AbonnementaddComponent', () => {
  let component: AbonnementaddComponent;
  let fixture: ComponentFixture<AbonnementaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbonnementaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AbonnementaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
