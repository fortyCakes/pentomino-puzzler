import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
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
export class PentominoDisplayComponent implements OnChanges {

  @Input() pentomino: Pentomino = PentominoLibrary.i();

  ngOnChanges(changes: SimpleChanges) {

    var newtiles = new Array<Tile>();

    this.pentomino.pentominoBlocks.forEach(pb => {
      console.log(pb.x + ", " + pb.y)
    })

    for (var y = 0; y < 5; y++) {
      for (var x = 0; x < 5; x++) {

        var isInShape = this.pentomino.containsLocation(new GridLocation(x, y), false);
        console.log(this.pentomino.name + ": (" + x + ", " + y + "), " + isInShape)
        if (isInShape) {
          newtiles.push({ color: PentominoLibrary.getColorFromText(this.pentomino.name), text: "" });
        }
        else {
          newtiles.push({ color: "#00000000", text: "" })
        }

      }
    }

    this.tiles = newtiles;
  }

  public tiles: Tile[] = new Array<Tile>();
  
}
