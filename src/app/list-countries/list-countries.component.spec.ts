import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ListCountriesComponent } from './list-countries.component';

describe('ListCountriesComponent', () => {
  let component: ListCountriesComponent;
  let fixture: ComponentFixture<ListCountriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListCountriesComponent],
      declarations: []
    });

    fixture = TestBed.createComponent(ListCountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('Deve exibir uma lista com várias países', () => {
    expect(fixture.debugElement.queryAll(By.css('p')).length).toBeGreaterThan(100);
  });

  it('Dado que o usuário procurou por "bras", deve exibir somente Brasil na lista', () => {
    const input: HTMLInputElement = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 'bras';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(fixture.debugElement.query(By.css('p')).nativeElement.textContent.trim()).toEqual('Brasil');
  });

});
