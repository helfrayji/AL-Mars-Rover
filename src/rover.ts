import { Point } from "./point";
import { Orientation } from "./orientation";
import { Planet } from "./planet";

export class Rover {
    constructor(
        private readonly position: Point,
        private readonly orientation: Orientation,
        private readonly planet: Planet
    ) {}

    moveForward(): Rover {
        const newPosition = this.orientation.moveForward(this.position, this.planet);

        if (!this.planet.hasObstacleAt(newPosition)) {
            return new Rover(newPosition, this.orientation, this.planet);
        }

        return this;
    }

    moveBackward(): Rover {
        const newPosition = this.orientation.moveBackward(this.position, this.planet);

        if (!this.planet.hasObstacleAt(newPosition)) {
            return new Rover(newPosition, this.orientation, this.planet);
        }

        return this;
    }

    turnLeft(): Rover {
        const newOrientation = this.orientation.rotateLeft();
        return new Rover(this.position, newOrientation, this.planet);
    }

    turnRight(): Rover {
        const newOrientation = this.orientation.rotateRight();
        return new Rover(this.position, newOrientation, this.planet);
    }

    getPosition(): Point {
        return this.position;
    }

    getOrientation(): Orientation {
        return this.orientation;
    }
}
