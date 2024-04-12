import { RoverInterpreter } from "../src/rover.interpreter";
import { Rover } from "../src/rover";
import { Planet } from "../src/planet";
import { Point } from "../src/point";
import { Orientation } from "../src/orientation";

describe("RoverInterpreter", () => {
    let planet: Planet;
    let rover: Rover;

    beforeEach(() => {
        planet = new Planet(100);
        rover = new Rover(new Point(0, 0), Orientation.North, planet);
    });

    test("Given a command 'A' when interpreting the command then the rover should move forward", () => {
        // Given
        const command = "A";

        // When
        const interpretedRover = RoverInterpreter.Interpreter(command, rover);

        // Then
        expect(interpretedRover.position).toEqual(new Point(0, 1));
    });

    test("Given a command 'R' when interpreting the command then the rover should move backward", () => {
        // Given
        const command = "R";

        // When
        const interpretedRover = RoverInterpreter.Interpreter(command, rover);

        // Then
        expect(interpretedRover.position).toEqual(new Point(0, 359));
    });

    test("Given a command 'G' when interpreting the command then the rover should turn left", () => {
        // Given
        const command = "G";

        // When
        const interpretedRover = RoverInterpreter.Interpreter(command, rover);

        // Then
        expect(interpretedRover.orientation).toEqual(Orientation.West);
    });

    test("Given a command 'D' when interpreting the command then the rover should turn right", () => {
        // Given
        const command = "D";

        // When
        const interpretedRover = RoverInterpreter.Interpreter(command, rover);

        // Then
        expect(interpretedRover.orientation).toEqual(Orientation.East);
    });

    test("Given a serialized rover string '0,0,N' when deserializing the string then it should return the corresponding rover object", () => {
        // Given
        const serializedRover = "0,0,N";

        // When
        const deserializedRover = RoverInterpreter.Deserialize(serializedRover, planet);

        // Then
        expect(deserializedRover.position).toEqual(new Point(0, 0));
        expect(deserializedRover.orientation).toEqual(Orientation.North);
    });

    test("Given a rover object when serializing the rover then it should return the corresponding serialized string", () => {
        // Given
        const rover = new Rover(new Point(1, 2), Orientation.South, planet);

        // When
        const serializedRover = RoverInterpreter.Serialize(rover);

        // Then
        expect(serializedRover).toEqual("1,2,S");
    });
});