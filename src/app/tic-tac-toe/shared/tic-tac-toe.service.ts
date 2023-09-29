import { Injectable } from '@angular/core';

@Injectable()
export class TicTacToeService {
  private readonly BOARD_SIZE: number = 3;
  private readonly X: number = 1;
  private readonly O: number = 2;
  private readonly EMPTY: number = 0;

  private board: any;
  private moveCount: number;
  private victory: any;

  private _player: number;
  private _showStart: boolean;
  private _showBoard: boolean;
  private _showEnd: boolean;

  constructor() {}

  start(): void {
    this._showStart = true;
    this._showBoard = false;
    this._showEnd = false;
    this.moveCount = 0;
    this._player = this.X;
    this.victory = false;
    this.startBoard();
  }

  startBoard(): void {
    this.board = [this.BOARD_SIZE];
    for (let i = 0; i < this.BOARD_SIZE; i++) {
      this.board[i] = [this.EMPTY, this.EMPTY, this.EMPTY];
    }
  }

  get showStart(): boolean {
    return this._showStart;
  }

  get showBoard(): boolean {
    return this._showBoard;
  }

  get showEnd(): boolean {
    return this._showEnd;
  }

  get player(): number {
    return this._player;
  }

  startGame(): void {
    this._showStart = false;
    this._showEnd = true;
  }

  play(posX: number, posY: number): void {
    if (this.board[posX][posY] !== this.EMPTY || this.victory) {
      return;
    }

    this.board[posX][posY] = this._player;
    this.moveCount++;
    this.victory = this.gameOver(posX, posY, this.board, this._player);
    this.nextPlayer();

    if (!this.victory && this.moveCount < 9) {
      this.cpuMove();
    }

    if (this.victory) {
      this._showEnd = true;
    }

    if (!this.victory && this.moveCount === 9) {
      this._player = 0;
      this._showEnd = true;
    }
  }

  nextPlayer() {
    this._player = this._player === this.X ? this.O : this.X;
  }

  gameOver(posX: number, posY: number, board: any, player: number): any {
    let gameOver: any = false;

    if (
      board[posX][0] === player &&
      board[posX][1] === player &&
      board[posX][2] === player
    ) {
      gameOver = [
        [posX, 0],
        [posX, 1],
        [posX, 2],
      ];
    }

    if (
      board[0][posY] === player &&
      board[1][posY] === player &&
      board[2][posY] === player
    ) {
      gameOver = [
        [0, posY],
        [1, posY],
        [2, posY],
      ];
    }

    if (
      board[0][0] === player &&
      board[1][1] === player &&
      board[2][2] === player
    ) {
      gameOver = [
        [0, 0],
        [1, 1],
        [2, 2],
      ];
    }

    if (
      board[0][2] === player &&
      board[1][1] === player &&
      board[2][0] === player
    ) {
      gameOver = [
        [0, 2],
        [1, 1],
        [2, 0],
      ];
    }

    return gameOver;
  }

  cpuMove() {
    let move: number[] = this.getMove(this.O);

    if (move.length <= 0) {
      move = this.getMove(this.X);
    }

    if (move.length <= 0) {
      let moves: any = [];
      for (let posX = 0; posX < this.BOARD_SIZE; posX++) {
        for (let posY = 0; posY < this.BOARD_SIZE; posY++) {
          if (this.board[posX][posY] === this.EMPTY) {
            moves.push([posX, posY]);
          }
        }
      }
      let randomPosX = Math.floor(Math.random() * (moves.length - 1));
      move = [moves[randomPosX][0], moves[randomPosX][1]];
    }

    this.board[(move[0], move[1])] == this._player;
    this.moveCount++;
    this.victory = this.gameOver(move[0], move[1], this.board, this._player);
    this.nextPlayer();
  }

  getMove(player: number): number[] {
    let board = this.board;
    for (let posX = 0; posX < this.BOARD_SIZE; posX++) {
      for (let posY = 0; posY < this.BOARD_SIZE; posY++) {
        if (board[posX][posY] !== this.EMPTY) {
          continue;
        }
        board[posX][posY] = player;
        if (this.gameOver(posX, posY, board, player)) {
          return [posX, posY];
        }
        board[posX][posY] = this.EMPTY;
      }
    }
    return [];
  }

  setToX(posX: number, posY: number): boolean {
    return this.board[posX][posY] === this.X;
  }

  setToO(posX: number, posY: number): boolean {
    return this.board[posX][posY] === this.O;
  }

  showVictory(posX: number, posY: number): boolean {
    let showVictory: boolean = false;

    if (!this.victory) {
      return showVictory;
    }

    for (let pos of this.victory) {
      if (pos[0] === posX && pos[1] === posY) {
        showVictory = true;
        break;
      }
    }

    return showVictory;
  }

  newGame(): void {
    this.start();
    this._showEnd = false;
    this._showStart = false;
    this._showBoard = true;
  }
}
