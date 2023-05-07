import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-date-difference',
  templateUrl: './date-difference.component.html',
  styleUrls: ['./date-difference.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DateDifferenceComponent {

  public begin = signal('');
  public end = signal('');
  public difference = computed(() => {
    const dateBegin = new Date(this.begin() + 'T00:00:00');
    const dateEnd = new Date(this.end() + 'T00:00:00');

    if (!this.begin() || !this.end() || dateEnd.getFullYear() < 1900 || dateBegin.getFullYear() < 1900) return '';

    return `Diferença em dias: ${(dateEnd.getTime() - dateBegin.getTime()) / 1000 / 60 / 60 / 24}`;
  });

}
