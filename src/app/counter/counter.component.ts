import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  standalone: true,
})
export class CounterComponent {

  public state = signal({
    counter: 0,
  }, { equal: (a, b) => a.counter === b.counter });
  public double = computed(() => this.state().counter * 2);

  constructor() {
    effect((onCleanup) => {
      console.log(this.state());

      onCleanup(() => console.log('limpou efeito'));
    });
  }

  public increment(): void {
    this.state.mutate((value) => value.counter++);
  }

}
