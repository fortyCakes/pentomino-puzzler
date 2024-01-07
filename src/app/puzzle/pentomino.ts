import { GridLocation, Grid } from "./grid";

export class Pentomino {
  name: string;
  pentominoBlocks: GridLocation[];
  xOffset: number = 0;
  yOffset: number = 0;

  constructor(name: string, squares: number[]) {
    this.name = name;
    const n = 8; // or some dynamic value
    this.pentominoBlocks = new Array<GridLocation>();

    for (let x = 0; x < 5; x++) {
      for (let y = 0; y < 5; y++) {
        if (squares.length > x * 5 + y) {
          if (squares[x * 5 + y] == 1) {
            this.pentominoBlocks.push(new GridLocation(x,y))
          }
        }
      }
    }
  }

  public get height(): number {
    var maxY = Math.max(...this.pentominoBlocks.map(p => p.y));
    var minY = Math.min(...this.pentominoBlocks.map(p => p.y));
    return maxY - minY + 1;
  }

  public get width(): number {
    var maxX = Math.max(...this.pentominoBlocks.map(p => p.x));
    var minX = Math.min(...this.pentominoBlocks.map(p => p.x));
    return maxX - minX + 1;
  }

  public rotate() {
    var newLocations = new Array<GridLocation>();

    this.pentominoBlocks.forEach(b => {
      newLocations.push(new GridLocation(4 - b.y, b.x));
    });

    this.pentominoBlocks = newLocations;
  }

  containsLocation(loc: GridLocation, useOffset = true): boolean {
    if (useOffset)
    {
      return this.pentominoBlocks.some(pb => pb.x + this.xOffset == loc.x && pb.y + this.yOffset == loc.y);
    }
    else {
      return this.pentominoBlocks.some(pb => pb.x== loc.x && pb.y == loc.y);
    }
  }

  containsTileIndex(tileIndex: number) : boolean {
    return this.containsLocation(new GridLocation(tileIndex - 5*Math.floor(tileIndex/5), Math.floor(tileIndex/5)));
  }

  overlapsWith(pentominoOther: Pentomino, withXOffset = 0, withYOffset = 0): boolean {
    return this.pentominoBlocks.some(pb => pentominoOther.pentominoBlocks.some(pbo =>
      pb.x + this.xOffset + withXOffset == pbo.x + pentominoOther.xOffset
      && pb.y + this.yOffset + withYOffset == pbo.y + pentominoOther.yOffset ))
  }

  isAdjacentTo(pentominoOther: Pentomino): boolean {
    // Adjacent if it doesn't overlap, but would if shifted by 1
    return !this.overlapsWith(pentominoOther) &&
      (
        this.overlapsWith(pentominoOther, 0, 1) ||
        this.overlapsWith(pentominoOther, 0, -1) ||
        this.overlapsWith(pentominoOther, 1, 0) ||
        this.overlapsWith(pentominoOther, -1, 0)
      );
  }
}
