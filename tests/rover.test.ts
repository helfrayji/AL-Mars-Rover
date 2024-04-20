import { Rover } from '../src/domain/rover';
import { Point } from '../src/domain/point';
import { Orientation } from '../src/domain/orientation';
import { Planet } from '../src/conf/planet';

describe('Rover', () => {
    let planet: Planet;
    let rover: Rover;

    beforeEach(() => {
        planet = new Planet(100); // Creating a planet with a grid size of 100x100
        rover = new Rover(new Point(0, 0), Orientation.North, planet); // Initializing the rover at point (0, 0) facing North
    });

    test('moveForward should move the rover one unit forward in the current orientation', () => {
        // When
        const newRover = rover.moveForward();

        // Then
        expect(newRover.position).toEqual(new Point(0, 1)); // The rover should now be at position (0, 1)
    });

    test('moveBackward should move the rover one unit backward in the current orientation', () => {
        // When
        const newRover = rover.moveBackward();

        // Then
        expect(newRover.position).toEqual(new Point(0, 359)); // The rover should now be at position (0, -359)
    });

    test('turnLeft should rotate the rover orientation 90 degrees counterclockwise', () => {
        // When
        const newRover = rover.turnLeft();

        // Then
        expect(newRover.orientation).toEqual(Orientation.West); // The rover's orientation should now be West
    });

    test('turnRight should rotate the rover orientation 90 degrees clockwise', () => {
        // When
        const newRover = rover.turnRight();

        // Then
        expect(newRover.orientation).toEqual(Orientation.East); // The rover's orientation should now be East
    });
});
