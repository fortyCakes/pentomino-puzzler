import { Component, OnInit } from '@angular/core';
import { Grid } from './grid';
import { PuzzleGenerator } from './puzzle-generator';
import { GridToText } from './GridToText';
import { MatButtonModule } from '@angular/material/button';
import { CdkDropList, CdkDrag, CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { PentominoLibrary } from './pentomino-library';
import { Pentomino } from './pentomino';

@Component({
  selector: 'app-puzzle',
  templateUrl: './puzzle.component.html',
  styleUrl: './puzzle.component.css'
})
export class PuzzleComponent implements OnInit {

  public width = 12;
  public height = 12;
  public numberOfPieces = 5;
  public numberOfStars = 5;
  public numberOfPrizes = 5;
  public numberOfBlocks = 20;

  public generated: boolean = false;
  public solutionVisible = false;
  public puzzle!: Grid;

  ngOnInit() {
    this.generatePuzzle();
  }

  public get puzzleText() {
    return GridToText.getViewOfPuzzle(this.puzzle, this.solutionVisible);
  }

  public get dropListGroup() :string[] {
    var dropLists = new Array<string>();

    for (var x = 0; x < this.puzzle.width; x++)
    {
      for (var y = 0; y < this.puzzle.height; y++)
      {
        dropLists.push("dropListId" + x + y);
      }
    }

    return dropLists;
  }

  public generatePuzzle() {


    this.puzzle = new Grid(this.width, this.height);
    this.generated = PuzzleGenerator.generate(this.puzzle, this.numberOfPieces, this.numberOfStars, this.numberOfPrizes, this.numberOfBlocks, true);

    if (!this.generated) {
      this.puzzle = new Grid(this.width, this.height);
      this.generated = PuzzleGenerator.generate(this.puzzle, this.numberOfPieces, this.numberOfStars, this.numberOfPrizes, this.numberOfBlocks, true);
    }
    if (!this.generated) {
      this.puzzle = new Grid(this.width, this.height);
      this.generated = PuzzleGenerator.generate(this.puzzle, this.numberOfPieces, this.numberOfStars, this.numberOfPrizes, this.numberOfBlocks, true);
    }

    this.solutionVisible = false;
  }

  public toggleSolution() {
    this.solutionVisible = !this.solutionVisible;
  }

  dropPentomino(event: CdkDragDrop<string[]>) {

    console.log(event.dropPoint)
    moveItemInArray(this.puzzle.playerPentominoes, event.previousIndex, event.currentIndex);
  }

  pentominoColor(pentomino: Pentomino) {
    return PentominoLibrary.getColorFromText(pentomino.name);
  }
}
