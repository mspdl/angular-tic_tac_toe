import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TicTacToeComponent } from './tic-tac-toe.component';

@NgModule({
  declarations: [TicTacToeComponent],
  imports: [CommonModule],
  exports: [TicTacToeComponent],
})
export class TicTacToeModule {}
