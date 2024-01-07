import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuzzleComponent } from './puzzle.component';
import { MatButtonModule } from '@angular/material/button';
import { PuzzleDisplayComponent } from './puzzle-display.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { PentominoDisplayComponent } from './pentomino-display.component';


@NgModule({
  declarations: [
    PuzzleComponent,
    PuzzleDisplayComponent,
    PentominoDisplayComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule
  ],
  exports: [
    PuzzleComponent,
    PuzzleDisplayComponent,
    PentominoDisplayComponent
  ]
})
export class PuzzleModule { }
