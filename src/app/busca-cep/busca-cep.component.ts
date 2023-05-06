import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { map, startWith } from 'rxjs';

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
  public title = signal('angular-signals');
  public cep = signal('01001000');
  public obterCep$ = computed(() => {
    if (this.cep().length !== 8) return;

    return this.obterEndereco$(this.cep()).pipe(
      map(resp => {
        if (resp.erro) {
          return 'Houve um erro';
        }

        return resp;
      }),
      startWith('Carregando...'),
    );
  });


  constructor(private _http: HttpClient) {
    this.title.set('Busca de CEP');
    effect(() => {
      console.log('mudou >>>>>>>>>', this.cep());
    });
  }

  public obterEndereco$(cep: string) {
    return this._http.get<{ erro: boolean }>(`https://viacep.com.br/ws/${cep}/json/`);
  }

}