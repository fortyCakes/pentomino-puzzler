import { Component, Input } from '@angular/core';
import { Grid } from './grid';

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
        returnedTiles.push({color: this.getColorFromText(text), text: text});
      }
    }

    return returnedTiles;
  }
  
  getColorFromText(text: string): string {
    switch(text){
      case '.':
        return 'lightblue';
      case 'X':
        return 'pink';
      case '*':
        return 'deepskyblue';
      case '1':
        return 'darkslateblue';
      case 'f':
        return 'darkslategrey';
      case 'i':
        return 'darkmagenta';
      case 'l':
        return 'forestgreen';
      case 'p':
        return 'mediumpurple';
      case 't':
        return 'midnightblue';
      case 'u':
        return 'seagreen';
      case 'n':
        return 'slategrey';
      case 'v':
        return 'tomato';
      case 'w':
        return 'yellowgreen';
      case 'x':
        return 'goldenrod';
      case 'y':
        return 'firebrick';
      case 'z':
        return 'chocolate';
      default:
        return 'white';
    }
  }
}
