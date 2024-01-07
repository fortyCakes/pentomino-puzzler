import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PuzzleComponent } from './puzzle.component';
import { MatButtonModule } from '@angular/material/button';
import { PuzzleDisplayComponent } from './puzzle-display.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { PentominoDisplayComponent } from './pentomino-display.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {DndModule} from 'ngx-drag-drop';


@NgModule({
  declarations: [
    PuzzleComponent,
    PuzzleDisplayComponent,
    PentominoDisplayComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    DndModule
  ],
  exports: [
    PuzzleComponent,
    PuzzleDisplayComponent,
    PentominoDisplayComponent
  ]
})
export class PuzzleModule { }
