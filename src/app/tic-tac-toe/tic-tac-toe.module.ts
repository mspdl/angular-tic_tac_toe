import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TicTacToeService } from './shared/tic-tac-toe.service';
import { TicTacToeComponent } from './tic-tac-toe.component';

@NgModule({
  declarations: [TicTacToeComponent],
  imports: [CommonModule],
  exports: [TicTacToeComponent],
  providers: [TicTacToeService],
})
export class TicTacToeModule {}
