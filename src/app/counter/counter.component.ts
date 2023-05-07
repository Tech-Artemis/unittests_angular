import { ChangeDetectionStrategy, Component, computed, effect, signal } from '@angular/core';

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
