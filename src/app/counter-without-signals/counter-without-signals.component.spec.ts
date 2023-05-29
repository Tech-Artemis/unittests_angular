import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterWithoutSignalsComponent } from './counter-without-signals.component';

describe('CounterWithoutSignalsComponent', () => {
  let component: CounterWithoutSignalsComponent;
  let fixture: ComponentFixture<CounterWithoutSignalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterWithoutSignalsComponent]
    });
    fixture = TestBed.createComponent(CounterWithoutSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
