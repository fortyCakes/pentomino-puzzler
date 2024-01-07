import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuzzleComponent } from './puzzle.component';
import { MatButtonModule } from '@angular/material/button';
import { PuzzleDisplayComponent } from './puzzle-display.component';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    PuzzleComponent,
    PuzzleDisplayComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule
  ],
  exports: [
    PuzzleComponent,
    PuzzleDisplayComponent
  ]
})
export class PuzzleModule { }
