import { Point } from '../src/domain/point';
import { Orientation } from '../src/domain/orientation';
import { Planet } from '../src/conf/planet';

describe('Orientation', () => {
    let planet: Planet;

    beforeEach(() => {
        planet = new Planet(100);
    });

    describe('rotateLeft', () => {
        test('should rotate the orientation 90 degrees counterclockwise', () => {
            // Given
            const orientation = Orientation.North;

            // When
            const newOrientation = orientation.rotateLeft();

            // Then
            expect(newOrientation).toEqual(Orientation.West);
        });
    });

    describe('rotateRight', () => {
        test('should rotate the orientation 90 degrees clockwise', () => {
            // Given
            const orientation = Orientation.North;

            // When
            const newOrientation = orientation.rotateRight();

            // Then
            expect(newOrientation).toEqual(Orientation.East);
        });
    });

    describe('moveForward', () => {
        test('should move the position one unit forward in the current orientation', () => {
            // Given
            const orientation = Orientation.North;
            const position = new Point(0, 0);

            // When
            const newPosition = orientation.moveForward(position, planet);

            // Then
            expect(newPosition).toEqual(new Point(0, 1));
        });
    });

    describe('moveBackward', () => {
        test('should move the position one unit backward in the current orientation', () => {
            // Given
            const orientation = Orientation.North;
            const position = new Point(0, 0);

            // When
            const newPosition = orientation.moveBackward(position, planet);

            // Then
            expect(newPosition).toEqual(new Point(0, 359));
        });
    });
});
