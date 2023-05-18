import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Output,
  inject,
} from '@angular/core';

@Directive({
  selector: '[appDirectiveTest]',
  standalone: true,
})
export class DirectiveTestDirective implements OnInit {

  private _elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  @HostBinding('attr.teste') // adicionara um attr teste com o valor da prop appDirectiveTest
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
