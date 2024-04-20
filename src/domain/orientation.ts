import { Point } from "./point";
import { Planet } from "../conf/planet";

export class Orientation {
    static readonly North: Orientation = new Orientation('N');
    static readonly East: Orientation = new Orientation('E');
    static readonly South: Orientation = new Orientation('S');
    static readonly West: Orientation = new Orientation('W');

    private value: OrientationType;

    private constructor(value: OrientationType) {
        this.value = value;
    }

    getValue(): OrientationType {
        return this.value;
    }

    rotateLeft(): Orientation {
        switch (this.value) {
            case 'N': return Orientation.West;
            case 'W': return Orientation.South;
            case 'S': return Orientation.East;
            case 'E': return Orientation.North;
            default: throw new Error('Invalid orientation');
        }
    }

    rotateRight(): Orientation {
        switch (this.value) {
            case 'N': return Orientation.East;
            case 'E': return Orientation.South;
            case 'S': return Orientation.West;
            case 'W': return Orientation.North;
            default: throw new Error('Invalid orientation');
        }
    }

    moveForward(position: Point, planet: Planet): Point {
        let newPosition = new Point(position.longitude, position.latitude);

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
        let newPosition = new Point(position.longitude, position.latitude);

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

type OrientationType = 'N' | 'E' | 'S' | 'W';
