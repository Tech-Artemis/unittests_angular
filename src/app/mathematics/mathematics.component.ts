import { NgIf, NgTemplateOutlet } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mathematics',
  templateUrl: './mathematics.component.html',
  styleUrls: ['./mathematics.component.scss'],
  standalone: true,
  imports: [
    NgIf,
    NgTemplateOutlet,
    FormsModule,
  ],
})
export class MathematicsComponent {

  private _ruleOfThree = signal<{ a?: number, b?: number, c?: number }>({
    a: undefined, // aponta para x
    b: undefined,
    c: undefined,
  });
  public isAllFilled = computed(() => this._ruleOfThree().a && this._ruleOfThree().b && this._ruleOfThree().c);
  public x = computed(() => {
    const ruleOfThree = this._ruleOfThree();
    if (this.isAllFilled()) {
      return +(ruleOfThree.b! * ruleOfThree.c! / ruleOfThree.a!).toFixed(2);
    } else {
      return '';
    }
  });

  public onChangeInput(prop: any, value: number): void {
    this._ruleOfThree.mutate(_value => _value[prop as keyof typeof _value] = value);
  }

  public reset(): void {
    this._ruleOfThree.set({
      a: undefined,
      b: undefined,
      c: undefined,
    });
  }

  public get ruleOfThree() {
    return this._ruleOfThree();
  }

}
