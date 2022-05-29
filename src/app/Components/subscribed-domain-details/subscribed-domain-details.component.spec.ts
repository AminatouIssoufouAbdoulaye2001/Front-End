import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribedDomainDetailsComponent } from './subscribed-domain-details.component';

describe('SubscribedDomainDetailsComponent', () => {
  let component: SubscribedDomainDetailsComponent;
  let fixture: ComponentFixture<SubscribedDomainDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscribedDomainDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscribedDomainDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
