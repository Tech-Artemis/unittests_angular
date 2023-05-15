import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathematicsComponent } from './mathematics.component';

describe('MathematicsComponent', () => {
  let component: MathematicsComponent;
  let fixture: ComponentFixture<MathematicsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MathematicsComponent]
    });
    fixture = TestBed.createComponent(MathematicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
