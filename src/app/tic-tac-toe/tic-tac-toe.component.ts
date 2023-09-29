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
}
