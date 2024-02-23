import { Point } from "./point";
import { Planet } from "./planet";

export class Orientation {
    static readonly NORTH: Orientation = new Orientation('N', 0, 1);
    static readonly EAST: Orientation = new Orientation('E', 1, 0);
    static readonly SOUTH: Orientation = new Orientation('S', 0, -1);
    static readonly WEST: Orientation = new Orientation('W', -1, 0);

    private value: string;
    private dx: number;
    private dy: number;

    private constructor(value: string, dx: number, dy: number) {
        this.value = value;
        this.dx = dx;
        this.dy = dy;
    }

    getValue(): string {
        return this.value;
    }

    private static orientations = [Orientation.NORTH, Orientation.EAST, Orientation.SOUTH, Orientation.WEST];

    rotateLeft(): Orientation {
        const index = Orientation.orientations.findIndex(o => o.value === this.value);
        const newIndex = (index + 3) % Orientation.orientations.length; // Adding 3 is equivalent to rotating left (or subtracting 1 with wraparound)
        return Orientation.orientations[newIndex];
    }

    rotateRight(): Orientation {
        const index = Orientation.orientations.findIndex(o => o.value === this.value);
        const newIndex = (index + 1) % Orientation.orientations.length; // Simple right rotation
        return Orientation.orientations[newIndex];
    }

    moveForward(position: Point, planet: Planet): Point {
        let newPosition = new Point(position.getLongitude() + this.dx, position.getLatitude() + this.dy);
        return planet.wrapAround(newPosition);
    }

    moveBackward(position: Point, planet: Planet): Point {
        let newPosition = new Point(position.getLongitude() - this.dx, position.getLatitude() - this.dy);
        return planet.wrapAround(newPosition);
    }
}
