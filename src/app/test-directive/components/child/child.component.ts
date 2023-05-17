import { Component } from '@angular/core';
import { DirectiveTestDirective } from '../../directives/directive-test.directive';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  standalone: true,
  hostDirectives: [
    {
      directive: DirectiveTestDirective,
      inputs: ['appDirectiveTest: colorDirective'],
      // eslint-disable-next-line @angular-eslint/no-outputs-metadata-property, @angular-eslint/no-output-rename
      outputs: ['clicked: hasClicked'],
    },
  ],
})
export class ChildComponent {

}
