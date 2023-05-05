import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsTesteComponent } from './signals-teste.component';

describe('SignalsTesteComponent', () => {
  let component: SignalsTesteComponent;
  let fixture: ComponentFixture<SignalsTesteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalsTesteComponent]
    });
    fixture = TestBed.createComponent(SignalsTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
