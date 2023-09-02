import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayEventsListComponent } from './pay-events-list.component2';

describe('EmployeeListComponent', () => {
  let component: PayEventsListComponent;
  let fixture: ComponentFixture<PayEventsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayEventsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayEventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
