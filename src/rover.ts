import { Point } from "./point";
import { Orientation } from "./orientation";
import { Planet } from "./planet";
import { moveForward, moveBackward } from "./orientation";

export class Rover {
    constructor(
        public readonly position: Point, 
        public readonly orientation: Orientation, 
        public readonly planet: Planet
    ) {}

    moveForward(): Rover {
        const newPosition = moveForward(this.position, this.orientation, this.planet);

        if (!this.planet.isObstacle(newPosition)) {
            return new Rover(newPosition, this.orientation, this.planet);
        }

        return this;
    }

    moveBackward(): Rover {
        const newPosition = moveBackward(this.position, this.orientation, this.planet);

        if (!this.planet.isObstacle(newPosition)) {
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
}
