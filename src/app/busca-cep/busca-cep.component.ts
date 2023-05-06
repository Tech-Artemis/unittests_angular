import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, effect, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { map, of, startWith } from 'rxjs';

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuscaCepComponent {

  private _http = inject(HttpClient);

  public title = signal('angular-signals');
  public teste = signal({ nome: 'teste' });
  public cep = signal('01001000');
  public obterCep$ = computed(() => {
    if (this.cep().length !== 8) return of('Digite um CEP válido');

    return this._http.get<{ erro: boolean }>(`https://viacep.com.br/ws/${this.cep()}/json/`).pipe(
      map(resp => {
        if (resp.erro) {
          return 'Houve um erro';
        }

        return resp;
      }),
      startWith('Carregando...'),
    );
  });


  constructor() {
    this.title.set('Busca de CE');
    this.title.update((prev) => prev + 'P');

    setTimeout(() => {
      this.teste.mutate(value => value.nome = 'Teste!');
    }, 3000);

    effect(() => {
      console.log('mudou >>>>>>>>>', this.cep());
    });
  }

}
