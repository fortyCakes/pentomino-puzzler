import {Pentomino} from "./pentomino"

export abstract class PentominoLibrary {
  public static list = 'filpntuvwxyz';

  public static getOneOfEach(): Pentomino[] {
    return [
      this.f(),
      this.i(),
      this.l(),
      this.p(),
      this.n(),
      this.t(),
      this.u(),
      this.v(),
      this.w(),
      this.x(),
      this.y(),
      this.z()];
}
  
    public static f(): Pentomino { return new Pentomino('f', [0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1])}
    public static i(): Pentomino { return new Pentomino('i', [1, 1, 1, 1, 1])}
    public static l(): Pentomino { return new Pentomino('l', [1, 1, 1, 1, 0, 1])}
    public static p(): Pentomino { return new Pentomino('p', [1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1])}
    public static n(): Pentomino { return new Pentomino('n', [1, 1, 1, 0, 0, 0, 0, 1, 1])}
    public static t(): Pentomino { return new Pentomino('t', [1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1])}
    public static u(): Pentomino { return new Pentomino('u', [1, 0, 1, 0, 0, 1, 1, 1])}
    public static v(): Pentomino { return new Pentomino('v', [1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 1])}
    public static w(): Pentomino { return new Pentomino('w', [0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1])}
    public static x(): Pentomino { return new Pentomino('x', [0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1])}
    public static y(): Pentomino { return new Pentomino('y', [1, 1, 1, 1, 0, 0, 1])}
    public static z(): Pentomino { return new Pentomino('z', [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1])}

    public static getColorFromText(text: string): string {
      switch(text){
        case '.':
          return '#303060';
        case 'X':
          return '#B02E0C  ';
        case '*':
          return '#449DD1';
        case '1':
          return '#7209B7';
        case 'f':
          return '#DB995A';
        case 'i':
          return '#D6D4A0';
        case 'l':
          return '#EABDA8 ';
        case 'p':
          return '#EFBDEB';
        case 't':
          return '#E7E6F7';
        case 'u':
          return '#C2EABD';
        case 'n':
          return '#CE84AD';
        case 'v':
          return 'tomato';
        case 'w':
          return '#82D173';
        case 'x':
          return '#FFD166';
        case 'y':
          return '#B796AC';
        case 'z':
          return '#EFC88B';
        case "~":
          return "#FFFDD0"
        default:
          return 'white';
      }
    }
  }
