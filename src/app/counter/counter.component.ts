import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { delay, finalize, interval, map, take } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {

  public state = signal({
    counter: 0,
  }, { equal: (a, b) => a.counter === b.counter });
  public double = computed(() => this.state().counter * 2);
  public triple = computed(() => this.double() / 2 * 3);
  public evenOrOdd = computed(() => {
    return {
      counter: this.state().counter % 2 === 0 ? 'Par' : 'Ímpar',
      double: this.double() % 2 === 0 ? 'Par' : 'Ímpar',
      triple: this.triple() % 2 === 0 ? 'Par' : 'Ímpar',
    };
  });

  public timer = toSignal(
    interval(50).pipe(
      delay(2000), // espera 2s antes de começar
      map(value => value * 2),
      take(101),
      finalize(() => console.log('finalizou')),
    ),
    { initialValue: -1 },
  );

  constructor() {
    effect((onCleanup) => {
      console.log(this.state());

      onCleanup(() => console.log('limpou efeito'));
    });
    // manualCleanup true faz com que o efeito não seja destruído ao destruir o componente
  }

  public increment(): void {
    this.state.mutate((value) => value.counter++);
    // this.state.update((value) => ({ counter: value.counter + 1 }));
  }

}
