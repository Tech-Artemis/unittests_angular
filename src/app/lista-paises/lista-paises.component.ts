import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { map } from 'rxjs';

import paises from './paises';

@Component({
  selector: 'app-lista-paises',
  templateUrl: './lista-paises.component.html',
  styleUrls: ['./lista-paises.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListaPaisesComponent {

  public paises = signal(paises);
  public termo = new FormControl<string | null>(null);
  public termoSignal = toSignal(this.termo.valueChanges.pipe(map(termo => termo?.toLowerCase())));
  public paisesFiltrados = computed(() => {
    const termo = this.termoSignal();
    if (!termo)
      return this.paises();

    return this.paises().filter(p => p.toLowerCase().includes(termo));
  });

}
