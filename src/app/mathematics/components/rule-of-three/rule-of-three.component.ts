import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

// https://stackoverflow.com/a/60301306/8082488
// X = typeof this.state
// type GetInsideSignal<X> = X extends WritableSignal<infer I> ? I : never;

@Component({
  selector: 'app-rule-of-three',
  templateUrl: './rule-of-three.component.html',
  styleUrls: ['./rule-of-three.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    NgTemplateOutlet,
    FormsModule,
  ]
})
export class RuleOfThreeComponent {

  public state = signal<{ a?: number, b?: number, c?: number }>({
    a: undefined, // aponta para x
    b: undefined,
    c: undefined,
  });
  public isAllFilled = computed(() => this.state().a && this.state().b && this.state().c);
  public x = computed(() => {
    const ruleOfThree = this.state();
    if (this.isAllFilled()) {
      return +(ruleOfThree.b! * ruleOfThree.c! / ruleOfThree.a!).toFixed(2);
    } else {
      return '';
    }
  });

  public onChangeInput(prop: keyof ReturnType<RuleOfThreeComponent['state']>, value: number): void {
    this.state.mutate(_value => _value[prop] = value);
  }

  public reset(): void {
    this.state.set({
      a: undefined,
      b: undefined,
      c: undefined,
    });
  }

}
