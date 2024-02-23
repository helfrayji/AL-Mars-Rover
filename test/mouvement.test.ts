import { Point } from "../src/point";
import { Orientation } from "../src/orientation";
import { Planet } from "../src/planet";
import { Rover } from "../src/rover";
import { Obstacle } from "../src/obstacle";

describe("Rover movements", () => {

    test("Given rover is facing North when it moves forward then it should move one unit northward", () => {
        // Given
        const planet = new Planet(100);
        const rover = new Rover(new Point(0, 0), Orientation.NORTH, planet);

        // When
        const movedRover = rover.moveForward();

        // Then
        expect(movedRover.getPosition()).toEqual(new Point(0, 1));
    });

    test("Given rover is facing North when it moves backward then it should move one unit southward", () => {
        // Given
        const planet = new Planet(100);
        const rover = new Rover(new Point(0, 0), Orientation.NORTH, planet);

        // When
        const movedRover = rover.moveBackward();

        // Then
        expect(movedRover.getPosition()).toEqual(new Point(0, 359));
    });

    test("Given rover is facing North when it turns left then it should face West", () => {
        // Given
        const planet = new Planet(100);
        const rover = new Rover(new Point(0, 0), Orientation.NORTH, planet);

        // When
        const turnedRover = rover.turnLeft();

        // Then
        expect(turnedRover.getOrientation()).toEqual(Orientation.WEST);
    });

    test("Given rover is facing North when it turns right then it should face East", () => {
        // Given
        const planet = new Planet(100);
        const rover = new Rover(new Point(0, 0), Orientation.NORTH, planet);

        // When
        const turnedRover = rover.turnRight();

        // Then
        expect(turnedRover.getOrientation()).toEqual(Orientation.EAST);
    });

    test("Given rover encounters an obstacle when it moves forward then it should stay in the same position", () => {
        // Given
        const planet = new Planet(100);
        const obstaclePosition = new Point(0, 1);
        const obstacle = new Obstacle(obstaclePosition);
        planet.addObstacle(obstacle);
        const rover = new Rover(new Point(0, 0), Orientation.NORTH, planet);

        // When
        const movedRover = rover.moveForward();

        // Then
        expect(movedRover.getPosition()).toEqual(new Point(0, 0));
    });

    test("Given rover is facing East when it moves forward then it should move one unit eastward", () => {
        // Given
        const planet = new Planet(100);
        const rover = new Rover(new Point(0, 0), Orientation.EAST, planet);

        // When
        const movedRover = rover.moveForward();

        // Then
        expect(movedRover.getPosition()).toEqual(new Point(1, 0));
    });

    test("Given rover is facing West when it moves backward then it should move one unit westward", () => {
        // Given
        const planet = new Planet(100);
        const rover = new Rover(new Point(3, 3), Orientation.WEST, planet);

        // When
        const movedRover = rover.moveBackward();

        // Then
        expect(movedRover.getPosition()).toEqual(new Point(4, 3));
    });

    test("Given rover is facing South when it turns left then it should face East", () => {
        // Given
        const planet = new Planet(100);
        const rover = new Rover(new Point(0, 0), Orientation.SOUTH, planet);

        // When
        const turnedRover = rover.turnLeft();

        // Then
        expect(turnedRover.getOrientation()).toEqual(Orientation.EAST);
    });

    test("Given rover is facing South when it turns right then it should face West", () => {
        // Given
        const planet = new Planet(100);
        const rover = new Rover(new Point(0, 0), Orientation.SOUTH, planet);

        // When
        const turnedRover = rover.turnRight();

        // Then
        expect(turnedRover.getOrientation()).toEqual(Orientation.WEST);
    });


    test("Given rover encounters an obstacle when it moves backward then it should stay in the same position", () => {
        // Given
        const planet = new Planet(100);
        const obstaclePosition = new Point(0, 359);
        const obstacle = new Obstacle(obstaclePosition);
        planet.addObstacle(obstacle);
        const rover = new Rover(new Point(0, 0), Orientation.NORTH, planet);
    
        // When
        const movedRover = rover.moveBackward();
    
        // Then
        expect(movedRover.getPosition()).toEqual(new Point(0, 0));
    });
});
