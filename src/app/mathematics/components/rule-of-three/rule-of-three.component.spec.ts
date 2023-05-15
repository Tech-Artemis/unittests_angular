import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleOfThreeComponent } from './rule-of-three.component';

describe('RuleOfThreeComponent', () => {
  let component: RuleOfThreeComponent;
  let fixture: ComponentFixture<RuleOfThreeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RuleOfThreeComponent]
    });
    fixture = TestBed.createComponent(RuleOfThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
