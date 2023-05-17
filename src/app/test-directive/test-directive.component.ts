import { Component } from '@angular/core';
import { ChildComponent } from './components/child/child.component';
import { DirectiveTestDirective } from './directives/directive-test.directive';

@Component({
  selector: 'app-test-directive',
  templateUrl: './test-directive.component.html',
  styleUrls: ['./test-directive.component.scss'],
  standalone: true,
  imports: [
    ChildComponent,
    DirectiveTestDirective,
  ],
})
export default class TestDirectiveComponent {

  onClick() {
    console.log('clicou');
  }

}
