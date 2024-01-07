import { PentominoLibrary } from "./pentomino-library"
import { Pentomino } from "./pentomino"

export class GridLocation {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

export class Grid {
  nodes: string[][];
  pentominoes: Pentomino[];
  playerPentominoes: Pentomino[];
  stars: GridLocation[];
  points: GridLocation[];
  blocks: GridLocation[];

  width: number;
  height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
    this.nodes = new Array(width)
      .fill('.')
      .map(() => new Array(height).fill('.'));

    this.pentominoes = new Array<Pentomino>();
    this.playerPentominoes = new Array<Pentomino>();
    this.stars = new Array<GridLocation>();
    this.points = new Array<GridLocation>();
    this.blocks = new Array<GridLocation>();
  }

  public toString = (): string => {
    return "Puzzle Grid, size " + this.width + "x" + this.height + "."
  };

  public placePentomino(
    pentomino: Pentomino,
    xOffset: number,
    yOffset: number,
    checkForClash: boolean = false,
    checkIsAdjacent: boolean = false
  ): boolean {
    if (xOffset < 0 || yOffset < 0) return false;
    if (xOffset + pentomino.width >= this.width -1) return false;
    if (yOffset + pentomino.height >= this.height -1) return false;

    pentomino.xOffset = xOffset;
    pentomino.yOffset = yOffset;

    if (checkForClash) {
      for (let pentominoIndex = 0; pentominoIndex < this.pentominoes.length; pentominoIndex++) {
        if (this.pentominoes[pentominoIndex].overlapsWith(pentomino))
          return false;
      }
    }

    if (checkIsAdjacent) {
      var isAdjacent = false;
      for (let pentominoIndex = 0; pentominoIndex < this.pentominoes.length; pentominoIndex++) {
        if (this.pentominoes[pentominoIndex].isAdjacentTo(pentomino))
          isAdjacent = true;
      }
      if (!isAdjacent) return false;
    }

    this.pentominoes.push(pentomino);

    return true;
  }

  public getTextAt(x: number, y: number, showSolution: boolean) {
    var loc = new GridLocation(x, y);
  
      if (showSolution) {
        var pentomino = this.pentominoes.find(p => p.containsLocation(loc))
        if (pentomino != undefined) {
          return pentomino.name;
        }
      }
  
      if (this.stars.some(s => s.x == loc.x && s.y == loc.y)) {
        return "*";
      }
      if (this.points.some(s => s.x == loc.x && s.y == loc.y)) {
        return "1";
      }
      if (this.blocks.some(s => s.x == loc.x && s.y == loc.y)) {
        return "X";
      }
  
      return ".";
  }
}


