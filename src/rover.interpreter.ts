import { Rover } from "./rover";
import { Point } from "./point";
import { Orientation } from "./orientation";
import { Planet } from "./planet";

export class RoverInterpreter {
    public static Interpreter(commande: string, rover: Rover): Rover {
        for (let lettre of commande) {
            if (lettre === "F")
                rover = rover.moveForward();
            else if (lettre === "B")
                rover = rover.moveBackward();
            else if (lettre === "L")
                rover = rover.turnLeft();
            else if (lettre === "R")
                rover = rover.turnRight();
        }

        return rover;
    }

    public static Deserialize(str: string, planet: Planet): Rover {
        const orientation = str.endsWith('S') ? Orientation.South : Orientation.North;
        const latitude = str.startsWith('1') ? 1 : 0;

        return new Rover(new Point(latitude, 0), orientation, planet);
    }

    public static Serialize(rover: Rover): string {
        return rover.position.latitude + ','
            + rover.position.longitude + ','
            + rover.orientation.toString().substring(0, 1);
    }
}
