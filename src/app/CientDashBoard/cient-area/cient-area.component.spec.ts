import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CientAreaComponent } from './cient-area.component';

describe('CientAreaComponent', () => {
  let component: CientAreaComponent;
  let fixture: ComponentFixture<CientAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CientAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CientAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
