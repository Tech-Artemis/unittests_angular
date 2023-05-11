import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
  ]
})
export class TicTacToeComponent {

  public actualPlayer = signal<1 | 2>(1);
  public game = signal([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  public lastMovement = signal<{ x?: number, y?: number }>({});
  public someoneWins = computed(() => {
    const last = this.lastMovement();
    if (last.x === undefined || last.y === undefined) return undefined;

    const game = this.game();
    const actualSymbol = game[last.x][last.y];

    // Verificar linha
    if (
      game[last.x][0] === actualSymbol &&
      game[last.x][1] === actualSymbol &&
      game[last.x][2] === actualSymbol
    ) {
      return this.getTextWin(actualSymbol === 'X' ? 1 : 2);
    }

    // Verificar coluna
    if (
      game[0][last.y] === actualSymbol &&
      game[1][last.y] === actualSymbol &&
      game[2][last.y] === actualSymbol
    ) {
      return this.getTextWin(actualSymbol === 'X' ? 1 : 2);
    }

    // Verificar diagonais
    if (
      game[0][0] === actualSymbol &&
      game[1][1] === actualSymbol &&
      game[2][2] === actualSymbol
    ) {
      return this.getTextWin(actualSymbol === 'X' ? 1 : 2);
    }

    if (
      game[2][0] === actualSymbol &&
      game[1][1] === actualSymbol &&
      game[0][2] === actualSymbol
    ) {
      return this.getTextWin(actualSymbol === 'X' ? 1 : 2);
    }

    // Deu velha
    if (
      game[0][0] && game[0][1] && game[0][1] &&
      game[1][0] && game[1][2] && game[1][2] &&
      game[2][0] && game[2][1] && game[2][2]
    ) {
      return 'Deu velha!';
    }

    return undefined;
  });

  public chooseBox(x: number, y: number): void {
    const someoneWins = this.someoneWins();
    const isFilled = !!this.game()[x][y];
    if (someoneWins || isFilled) return;

    this.game.mutate((value) => value[x][y] = this.actualPlayer() === 1 ? 'X' : 'O');
    this.actualPlayer.update(value => value === 1 ? 2 : 1);
    this.lastMovement.set({ x, y });
  }

  public reset(): void {
    this.game.set([
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ]);
    this.actualPlayer.set(1);
    this.lastMovement.set({});
  }

  private getTextWin(player: number): string {
    return `Jogador ${player} ganhou!`;
  }

}
