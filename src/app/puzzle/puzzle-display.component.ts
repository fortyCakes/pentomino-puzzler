import { Component, Input } from '@angular/core';
import { Grid } from './grid';
import { Pentomino } from './pentomino';
import { PentominoLibrary } from './pentomino-library';

export interface Tile {
  color: string;
  text: string;
}

@Component({
  selector: 'puzzle-display',
  templateUrl: './puzzle-display.component.html',
  styleUrl: './puzzle-display.component.css'
})
export class PuzzleDisplayComponent {

  @Input() grid: Grid = new Grid(0,0);
  @Input() showSolution: boolean = false;

  public get tiles() : Tile[] {
    var returnedTiles = new Array<Tile>();
    
    for (var y = 0; y < this.grid.height; y++)
    {
      for (var x = 0; x < this.grid.width; x++)
      {
        var text = this.grid.getTextAt(x,y,this.showSolution);
        returnedTiles.push({color: PentominoLibrary.getColorFromText(text), text: text});
      }
    }

    return returnedTiles;
  }

  public get pentominoes() : Pentomino[] {
    return this.grid.pentominoes;
  }
}
