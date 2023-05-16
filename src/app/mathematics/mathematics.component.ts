import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RuleOfThreeComponent } from './components/rule-of-three/rule-of-three.component';

@Component({
  selector: 'app-mathematics',
  templateUrl: './mathematics.component.html',
  styleUrls: ['./mathematics.component.scss'],
  standalone: true,
  imports: [
    RuleOfThreeComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MathematicsComponent {

}
