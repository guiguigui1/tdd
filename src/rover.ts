export enum Direction {
  NORTH = 0,
  EAST = 1,
  SOUTH = 2,
  WEST = 3,
}

export enum Instruction {
  FORWARD = "F",
  BACKWARD = "B",
  RIGHT = "R",
  LEFT = "L",
}

export interface RoverLocation {
  x: number;
  y: number;
}

export class Rover {
  locationX: number;
  locationY: number;
  direction: Direction;

  constructor(location: RoverLocation, direction: Direction) {
    this.locationX = location.x;
    this.locationY = location.y;
    this.direction = direction;
  }

  location(): RoverLocation {
    return {
      x: this.locationX,
      y: this.locationY,
    };
  }

  move(instructions: string): void {
    const instructionArray: string[] = instructions.split("");

    instructionArray.forEach((instruction) => {
      switch (instruction) {
        case Instruction.FORWARD:
          return this.goForward();
        case Instruction.BACKWARD:
          return this.goBackward();
        case Instruction.RIGHT:
          return this.rotateRight();
        case Instruction.LEFT:
          return this.rotateLeft();
        default:
          return;
      }
    });
  }

  private go(amount: number) {
    switch (this.direction) {
      case Direction.NORTH:
        this.locationY -= amount;
        break;
      case Direction.SOUTH:
        this.locationY += amount;
        break;
      case Direction.EAST:
        this.locationX += amount;
        break;
      case Direction.WEST:
        this.locationX -= amount;
        break;
    }
  }

  private goForward() {
    this.go(1);
  }

  private goBackward() {
    this.go(-1);
  }

  private rotateLeft() {
    this.direction = (this.direction + 3) % 4;
  }

  private rotateRight() {
    this.direction = (this.direction + 1) % 4;
  }
}
