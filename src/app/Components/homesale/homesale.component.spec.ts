import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesaleComponent } from './homesale.component';

describe('HomesaleComponent', () => {
  let component: HomesaleComponent;
  let fixture: ComponentFixture<HomesaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomesaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomesaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
