import { Point } from "../src/point";
import { Orientation } from "../src/orientation";
import { Planet } from "../src/planet";
import { Rover } from "../src/rover";
import { Obstacle } from "../src/obstacle";

describe("Rover movements", () => {

    test("Given rover is facing North when it moves forward then it should move one unit northward", () => {
        // Given
        const planet = new Planet(100);
        const rover = new RoverBuilder()
            .atPosition(0, 0)
            .facing(Orientation.North)
            .onPlanet(planet)
            .build();

        // When
        const movedRover = rover.moveForward();

        // Then
        expect(movedRover.position).toEqual(new Point(0, 1));
    });

    test("Given rover is facing North when it moves backward then it should move one unit southward", () => {
        // Given
        const planet = new Planet(100);
        const rover = new RoverBuilder()
            .atPosition(0, 0)
            .facing(Orientation.North)
            .onPlanet(planet)
            .build();

        // When
        const movedRover = rover.moveBackward();

        // Then
        expect(movedRover.position).toEqual(new Point(0, 359));
    });

    test("Given rover is facing North when it turns left then it should face West", () => {
        // Given
        const planet = new Planet(100);
        const rover = new RoverBuilder()
            .atPosition(0, 0)
            .facing(Orientation.North)
            .onPlanet(planet)
            .build();

        // When
        const turnedRover = rover.turnLeft();

        // Then
        expect(turnedRover.orientation).toEqual(Orientation.West);
    });

    test("Given rover is facing North when it turns right then it should face East", () => {
        // Given
        const planet = new Planet(100);
        const rover = new RoverBuilder()
            .atPosition(0, 0)
            .facing(Orientation.North)
            .onPlanet(planet)
            .build();

        // When
        const turnedRover = rover.turnRight();

        // Then
        expect(turnedRover.orientation).toEqual(Orientation.East);
    });

    test("Given rover encounters an obstacle when it moves forward then it should stay in the same position", () => {
        // Given
        const planet = new Planet(100);
        const obstaclePosition = new Point(0, 1);
        const obstacle = new Obstacle(obstaclePosition);
        planet.addObstacle(obstacle);
        const rover = new RoverBuilder()
            .atPosition(0, 0)
            .facing(Orientation.North)
            .onPlanet(planet)
            .build();

        // When
        const movedRover = rover.moveForward();

        // Then
        expect(movedRover.position).toEqual(new Point(0, 0));
    });

    test("Given rover is facing East when it moves forward then it should move one unit eastward", () => {
        // Given
        const planet = new Planet(100);
        const rover = new RoverBuilder()
            .atPosition(0, 0)
            .facing(Orientation.East)
            .onPlanet(planet)
            .build();

        // When
        const movedRover = rover.moveForward();

        // Then
        expect(movedRover.position).toEqual(new Point(1, 0));
    });

    test("Given rover is facing West when it moves backward then it should move one unit westward", () => {
        // Given
        const planet = new Planet(100);
        const rover = new RoverBuilder()
            .atPosition(3, 3)
            .facing(Orientation.West)
            .onPlanet(planet)
            .build();

        // When
        const movedRover = rover.moveBackward();

        // Then
        expect(movedRover.position).toEqual(new Point(4, 3));
    });

    test("Given rover is facing South when it turns left then it should face East", () => {
        // Given
        const planet = new Planet(100);
        const rover = new RoverBuilder()
            .atPosition(0, 0)
            .facing(Orientation.South)
            .onPlanet(planet)
            .build();

        // When
        const turnedRover = rover.turnLeft();

        // Then
        expect(turnedRover.orientation).toEqual(Orientation.East);
    });

    test("Given rover is facing South when it turns right then it should face West", () => {
        // Given
        const planet = new Planet(100);
        const rover = new RoverBuilder()
            .atPosition(0, 0)
            .facing(Orientation.South)
            .onPlanet(planet)
            .build();

        // When
        const turnedRover = rover.turnRight();

        // Then
        expect(turnedRover.orientation).toEqual(Orientation.West);
    });


    test("Given rover encounters an obstacle when it moves backward then it should stay in the same position", () => {
        // Given
        const planet = new Planet(100);
        const obstaclePosition = new Point(0, 359);
        const obstacle = new Obstacle(obstaclePosition);
        planet.addObstacle(obstacle);
        const rover = new RoverBuilder()
            .atPosition(0, 0)
            .facing(Orientation.North)
            .onPlanet(planet)
            .build();
    
        // When
        const movedRover = rover.moveBackward();
    
        // Then
        expect(movedRover.position).toEqual(new Point(0, 0));
    });
});

class RoverBuilder {
    private position: Point = new Point(0, 0);
    private orientation: Orientation = Orientation.North;
    private planet!: Planet;

    atPosition(x: number, y: number): this {
        this.position = new Point(x, y);
        return this;
    }

    facing(orientation: Orientation): this {
        this.orientation = orientation;
        return this;
    }

    onPlanet(planet: Planet): this {
        this.planet = planet;
        return this;
    }

    build(): Rover {
        return new Rover(this.position, this.orientation, this.planet);
    }
}
