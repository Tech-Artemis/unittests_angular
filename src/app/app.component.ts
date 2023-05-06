import { Component, computed, effect, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public rotaAtual = toSignal(
    this._router.events.pipe(
      filter(e => e instanceof NavigationEnd),
      map(r => r as NavigationEnd),
      map(r => r.url.substring(1)),
    )
  );

  constructor(
    private _router: Router,
  ) { }

}
