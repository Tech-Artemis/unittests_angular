import { Component, HostBinding } from '@angular/core';
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

  @HostBinding('attr.aria-expanded')
  @HostBinding('class.expanded')
  public expanded: boolean = false;

  @HostBinding('style.fontSize')
  public fontSize = '16px';

  @HostBinding('style.cursor')
  public cursor = 'pointer';

  onClick() {
    console.log('clicou');
    this.expanded = !this.expanded;
    this.fontSize = this.expanded ? '24px' : '16px';
  }

}
