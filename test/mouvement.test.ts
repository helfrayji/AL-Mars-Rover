import { Point } from "../src/point";
import { Orientation } from "../src/orientation";
import { Planet } from "../src/planet";
import { Rover } from "../src/rover";
import { Obstacle } from "../src/obstacle";

describe("Rover movements", () => {
    let planet: Planet;
    let rover: Rover;

    beforeEach(() => {
        planet = new Planet(100);
        rover = new Rover(new Point(0, 0), Orientation.North, planet);
    });

    test("Given rover is facing North when it moves forward then it should move one unit northward", () => {

        // Given
        const initialPosition = new Point(0, 0);
        rover = new Rover(initialPosition, Orientation.North, planet);

        // When
        rover = rover.moveForward();

        // Then
        expect(rover.position).toEqual(new Point(0, 1));
    });

    test("Given rover is facing North when it moves backward then it should move one unit southward", () => {

        // Given
        const initialPosition = new Point(0, 0);
        rover = new Rover(initialPosition, Orientation.North, planet);

        // When
        rover = rover.moveBackward();

        // Then
        expect(rover.position).toEqual(new Point(0, 359));
    });

    test("Given rover is facing North when it turns left then it should face West", () => {

        // Given
        const initialOrientation = Orientation.North;
        rover = new Rover(new Point(0, 0), initialOrientation, planet);

        // When
        rover = rover.turnLeft();

        // Then
        expect(rover.orientation).toEqual(Orientation.West);
    });

    test("Given rover is facing North when it turns right then it should face East", () => {

        // Given
        const initialOrientation = Orientation.North;
        rover = new Rover(new Point(0, 0), initialOrientation, planet);

        // When
        rover = rover.turnRight();

        // Then
        expect(rover.orientation).toEqual(Orientation.East);
    });

    test("Given rover encounters an obstacle when it moves forward then it should stay in the same position", () => {

        // Given
        const obstaclePosition = new Point(0, 1);
        const obstacle = new Obstacle(obstaclePosition);
        planet.addObstacle(obstacle);
        const initialPosition = new Point(0, 0);
        rover = new Rover(initialPosition, Orientation.North, planet);

        // When
        rover = rover.moveForward();

        // Then
        expect(rover.position).toEqual(initialPosition);
    });

    test("Given rover is facing East when it moves forward then it should move one unit eastward", () => {
        // Given
        const initialPosition = new Point(0, 0);
        rover = new Rover(initialPosition, Orientation.East, planet);

        // When
        rover = rover.moveForward();

        // Then
        expect(rover.position).toEqual(new Point(1, 0));
    });

    test("Given rover is facing West when it moves backward then it should move one unit westward", () => {
        // Given
        const initialPosition = new Point(3, 3);
        rover = new Rover(initialPosition, Orientation.West, planet);

        // When
        rover = rover.moveBackward();

        // Then
        expect(rover.position).toEqual(new Point(4, 3));
    });

    test("Given rover is facing South when it turns left then it should face East", () => {
        // Given
        const initialOrientation = Orientation.South;
        rover = new Rover(new Point(0, 0), initialOrientation, planet);

        // When
        rover = rover.turnLeft();

        // Then
        expect(rover.orientation).toEqual(Orientation.East);
    });

    test("Given rover is facing South when it turns right then it should face West", () => {
        // Given
        const initialOrientation = Orientation.South;
        rover = new Rover(new Point(0, 0), initialOrientation, planet);

        // When
        rover = rover.turnRight();

        // Then
        expect(rover.orientation).toEqual(Orientation.West);
    });


    test("Given rover encounters an obstacle when it moves backward then it should stay in the same position", () => {
        // Given
        const obstaclePosition = new Point(0, 359);
        const obstacle = new Obstacle(obstaclePosition);
        planet.addObstacle(obstacle);
        const initialPosition = new Point(0, 0);
        rover = new Rover(initialPosition, Orientation.North, planet);
    
        // When
        rover = rover.moveBackward();
    
        // Then
        expect(rover.position).toEqual(initialPosition);
    });
});
