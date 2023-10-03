import { Component, OnInit } from '@angular/core';
import { TicTacToeService } from './shared/tic-tac-toe.service';

@Component({
  selector: 'app-tic-tac-toe',
  templateUrl: './tic-tac-toe.component.html',
  styleUrls: ['./tic-tac-toe.component.scss'],
})
export class TicTacToeComponent implements OnInit {
  constructor(private ticTacToeService: TicTacToeService) {}

  ngOnInit(): void {
    this.ticTacToeService.start();
  }

  get showStart(): boolean {
    return this.ticTacToeService.showStart;
  }

  get showEnd(): boolean {
    return this.ticTacToeService.showEnd;
  }

  get showBoard(): boolean {
    return this.ticTacToeService.showBoard;
  }

  onStartGame(): void {
    this.ticTacToeService.startGame();
  }

  onPlay(posX: number, posY: number): void {
    this.ticTacToeService.play(posX, posY);
  }

  onSetToX(posX: number, posY: number): boolean {
    return this.ticTacToeService.setToX(posX, posY);
  }

  onSetToO(posX: number, posY: number): boolean {
    return this.ticTacToeService.setToO(posX, posY);
  }

  onShowVictory(posX: number, posY: number): boolean {
    return this.ticTacToeService.showVictory(posX, posY);
  }
}
