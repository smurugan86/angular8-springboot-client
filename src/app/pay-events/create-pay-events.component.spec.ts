import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePayEventsComponent } from './create-pay-events.component';

describe('CreateEmployeeComponent', () => {
  let component: CreatePayEventsComponent;
  let fixture: ComponentFixture<CreatePayEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePayEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePayEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
