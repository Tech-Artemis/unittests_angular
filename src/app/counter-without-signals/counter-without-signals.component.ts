import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';

@Component({
  selector: 'app-counter-without-signals',
  templateUrl: './counter-without-signals.component.html',
  styleUrls: ['./counter-without-signals.component.scss'],
  standalone: true,
  imports: [
    AsyncPipe,
  ]
})
export default class CounterWithoutSignalsComponent {

  public counter$ = new BehaviorSubject(0);
  public double$ = this.counter$.asObservable().pipe(
    map(value => value * 2),
  );

  public increment(): void {
    this.counter$.next(this.counter$.value + 1);
  }

}
