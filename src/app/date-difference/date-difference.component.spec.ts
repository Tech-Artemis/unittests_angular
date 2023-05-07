import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateDifferenceComponent } from './date-difference.component';

describe('DateDifferenceComponent', () => {
  let component: DateDifferenceComponent;
  let fixture: ComponentFixture<DateDifferenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateDifferenceComponent]
    });
    fixture = TestBed.createComponent(DateDifferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
