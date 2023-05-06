import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import paises from './paises';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class ListaPaisesComponent {

  public termo = new FormControl<string | null>(null);
  public termoSignal = toSignal(this.termo.valueChanges);
  public paisesFiltrados = computed(() => {
    if (!this.termoSignal())
      return paises();

    return paises().filter(p => p.toLowerCase().includes(this.termoSignal()!.toLowerCase()));
  });

}

