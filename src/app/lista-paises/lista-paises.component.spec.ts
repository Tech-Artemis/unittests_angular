import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ListaPaisesComponent } from './lista-paises.component';

describe('ListaPaisesComponent', () => {
  let component: ListaPaisesComponent;
  let fixture: ComponentFixture<ListaPaisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListaPaisesComponent],
      declarations: []
    });

    fixture = TestBed.createComponent(ListaPaisesComponent);
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
