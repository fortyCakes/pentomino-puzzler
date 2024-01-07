import { Component, Input } from '@angular/core';
import { Grid, GridLocation } from './grid';
import { Pentomino } from './pentomino';
import { PentominoLibrary } from './pentomino-library';

export interface Tile {
  color: string;
  text: string;
}

@Component({
  selector: 'pentomino-display',
  templateUrl: './pentomino-display.component.html'
})
export class PentominoDisplayComponent {

  @Input() pentomino: Pentomino = PentominoLibrary.i;

  public get tiles() : Tile[] {
    var returnedTiles = new Array<Tile>();
    
console.log("Printing tile " + this.pentomino.name);

this.pentomino.pentominoBlocks.forEach(pb => {
  console.log(pb.x + ", " + pb.y)
})

    for (var y = 0; y < 5; y++)
    {
      for (var x = 0; x < 5; x++)
      {
        
        var isInShape = this.pentomino.containsLocation(new GridLocation(x,y), false);
        console.log(this.pentomino.name + ": (" + x + ", " + y + "), " + isInShape)
        if (isInShape) {
        returnedTiles.push({color: PentominoLibrary.getColorFromText(this.pentomino.name), text: ""});
        }
        else {
          returnedTiles.push({color: PentominoLibrary.getColorFromText("."), text: ""})
        }
        
      }
    }

    return returnedTiles;
  }
  
  
}
