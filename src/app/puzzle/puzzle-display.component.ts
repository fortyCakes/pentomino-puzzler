import { ApplicationRef, ChangeDetectorRef, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Grid, GridLocation } from './grid';
import { Pentomino } from './pentomino';
import { PentominoLibrary } from './pentomino-library';
import { CdkDragEnter } from '@angular/cdk/drag-drop';
import { DndDropEvent } from 'ngx-drag-drop';

export interface Tile {
  color: string;
  text: string;
  x: number;
  y: number;
}

@Component({
  selector: 'puzzle-display',
  templateUrl: './puzzle-display.component.html',
  styleUrl: './puzzle-display.component.css'
})
export class PuzzleDisplayComponent implements OnChanges {

  constructor(private cdr: ApplicationRef) {}

  @Input() grid: Grid = new Grid(0, 0);
  @Input() showSolution: boolean = false;
  @Input() currentlyDragging: Pentomino | undefined;
  @Input() switch = false;

  ngOnChanges(changes: SimpleChanges): void {
    var returnedTiles = new Array<Tile>();

    for (var y = 0; y < this.grid.height; y++) {
      for (var x = 0; x < this.grid.width; x++) {
        var loc = new GridLocation(x, y);
        var text: string;
        var playerPentomino = this.grid.playerPentominoes.find(p => p.containsLocation(loc));
        if (this.grid.ghostPentomino && this.grid.ghostPentomino?.containsLocation(loc)) {
          text = "~"
        }
        else if (playerPentomino && !this.showSolution)
        {
          text = playerPentomino.name;
        }
        else {
          text = this.grid.getTextAt(x, y, this.showSolution);
        }
        returnedTiles.push({ color: PentominoLibrary.getColorFromText(text), text: text, x: x, y: y });
      }
    }

    this.tiles = returnedTiles;
  }

  public tiles: Tile[] = new Array<Tile>;

  public get pentominoes(): Pentomino[] {
    return this.grid.pentominoes;
  }

  onDragover($event: DragEvent, x: number, y: number) {
    /* var ghostPentomino = PentominoLibrary.i();
    ghostPentomino.pentominoBlocks = new Array<GridLocation>();

    // Make a copy of the currently dragging to ensure rotation is the same
    var blocks = this.currentlyDragging?.pentominoBlocks;
    if (blocks) {
      blocks.forEach(b => ghostPentomino.pentominoBlocks.push(JSON.parse(JSON.stringify(b))));
    }
    var minX = Math.min(...ghostPentomino.pentominoBlocks.map(pb=>pb.x));
    var minY = Math.min(...ghostPentomino.pentominoBlocks.map(pb=>pb.y));
    ghostPentomino.xOffset = x - minX;
    ghostPentomino.yOffset = y - minY;

    this.grid.ghostPentomino = ghostPentomino; */
  }
  onDrop($event: DndDropEvent, x:number, y:number) {
    var loc = new GridLocation(x,y);
    var playerPentomino = this.grid.playerPentominoes.find(p => p.name == this.currentlyDragging?.name);
    console.log(playerPentomino);
    if (playerPentomino) {
      var minX = Math.min(...playerPentomino.pentominoBlocks.map(pb=>pb.x));
      var minY = Math.min(...playerPentomino.pentominoBlocks.map(pb=>pb.y));
      playerPentomino.xOffset = x - minX;
      playerPentomino.yOffset = y - minY;
    }
  }
}
