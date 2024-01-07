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
  templateUrl: './pentomino-display.component.html',
  styleUrl: './pentomino-display.component.css'
})
export class PentominoDisplayComponent implements OnChanges {

  @Input() pentomino: Pentomino = PentominoLibrary.i();

  ngOnChanges(changes: SimpleChanges) {

    this.renewTiles();
  }

  public tiles: Tile[] = new Array<Tile>();

  private renewTiles() {
    var newtiles = new Array<Tile>();

    this.pentomino.pentominoBlocks.forEach(pb => {
    });

    for (var y = this.pentomino.minY; y < this.pentomino.maxY+1; y++) {
      for (var x = this.pentomino.minX; x < this.pentomino.maxX+1; x++) {

        var isInShape = this.pentomino.containsLocation(new GridLocation(x, y), false);

        if (isInShape) {
          newtiles.push({ color: PentominoLibrary.getColorFromText(this.pentomino.name), text: "" });
        }
        else {
          newtiles.push({ color: "#00000000", text: "" });
        }

      }
    }

    this.tiles = newtiles;
  }

  onClick() {
    this.pentomino.rotate();
    this.pentomino.xOffset = -999;
    this.renewTiles();
  }

}
