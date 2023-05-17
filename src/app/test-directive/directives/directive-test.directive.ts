import { Directive, ElementRef, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';

@Directive({
  selector: '[appDirectiveTest]',
  standalone: true,
})
export class DirectiveTestDirective implements OnInit {

  private _elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  @Input() appDirectiveTest?: string;
  @Output() clicked = new EventEmitter();

  public ngOnInit(): void {
    this._elementRef.nativeElement.style.color = this.appDirectiveTest!;

    this._elementRef.nativeElement.addEventListener('click', () => this.clicked.emit('clicou'));
  }

}
