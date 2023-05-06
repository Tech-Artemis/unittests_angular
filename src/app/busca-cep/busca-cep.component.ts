import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, computed, effect, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { map } from 'rxjs';

@Component({
  selector: 'app-busca-cep',
  templateUrl: './busca-cep.component.html',
  styleUrls: ['./busca-cep.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
  ]
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
    );
  });


  constructor(private _http: HttpClient) {
    effect(() => {
      console.log('mudou >>>>>>>>>', this.cep());
    });
  }

  public obterEndereco$(cep: string) {
    return this._http.get<{ erro: boolean }>(`https://viacep.com.br/ws/${cep}/json/`);
  }

}
