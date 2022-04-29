import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailsuiteComponent } from './mailsuite.component';

describe('MailsuiteComponent', () => {
  let component: MailsuiteComponent;
  let fixture: ComponentFixture<MailsuiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MailsuiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MailsuiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
