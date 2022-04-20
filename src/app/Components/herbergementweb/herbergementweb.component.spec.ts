import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbergementwebComponent } from './herbergementweb.component';

describe('HerbergementwebComponent', () => {
  let component: HerbergementwebComponent;
  let fixture: ComponentFixture<HerbergementwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerbergementwebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerbergementwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
