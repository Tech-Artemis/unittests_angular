import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, inject } from '@angular/core';

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

  @HostListener('mouseenter')
  public onMouseEnter(): void {
    this._elementRef.nativeElement.style.display = 'block';
    this._elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave')
  public onMouseLeave(): void {
    this._elementRef.nativeElement.style.backgroundColor = '';
  }

}
