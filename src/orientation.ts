import { Point } from "./point";
import { Planet } from "./planet";

export class Orientation {
    static readonly NORTH: Orientation = new Orientation('N');
    static readonly EAST: Orientation = new Orientation('E');
    static readonly SOUTH: Orientation = new Orientation('S');
    static readonly WEST: Orientation = new Orientation('W');

    private value: string;

    private constructor(value: string) {
        this.value = value;
    }

    getValue(): string {
        return this.value;
    }

    rotateLeft(): Orientation {
        switch (this.value) {
            case 'N':
                return Orientation.WEST;
            case 'W':
                return Orientation.SOUTH;
            case 'S':
                return Orientation.EAST;
            case 'E':
                return Orientation.NORTH;
            default:
                throw new Error('Invalid orientation');
        }
    }

    rotateRight(): Orientation {
        switch (this.value) {
            case 'N':
                return Orientation.EAST;
            case 'E':
                return Orientation.SOUTH;
            case 'S':
                return Orientation.WEST;
            case 'W':
                return Orientation.NORTH;
            default:
                throw new Error('Invalid orientation');
        }
    }

    moveForward(position: Point, planet: Planet): Point {
        let newPosition = new Point(position.getLongitude(), position.getLatitude());

        switch (this.value) {
            case 'N':
                newPosition = newPosition.incrementLatitude(1);
                break;
            case 'E':
                newPosition = newPosition.incrementLongitude(1);
                break;
            case 'S':
                newPosition = newPosition.DecrementLatitude(1);
                break;
            case 'W':
                newPosition = newPosition.DecrementLongitude(1);
                break;
        }

        return planet.wrapAround(newPosition);
    }

    moveBackward(position: Point, planet: Planet): Point {
        let newPosition = new Point(position.getLongitude(), position.getLatitude());

        switch (this.value) {
            case 'N':
                newPosition = newPosition.DecrementLatitude(1);
                break;
            case 'E':
                newPosition = newPosition.DecrementLongitude(1);
                break;
            case 'S':
                newPosition = newPosition.incrementLatitude(1);
                break;
            case 'W':
                newPosition = newPosition.incrementLongitude(1);
                break;
        }

        return planet.wrapAround(newPosition);
    }
}
