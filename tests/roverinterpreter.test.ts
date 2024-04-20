import { RoverInterpreter } from '../src/rover-interpreter/rover.interpreter';
import { Rover } from '../src/domain/rover';
import { Planet } from '../src/conf/planet';
import { Point } from '../src/domain/point';
import { Orientation } from '../src/domain/orientation';

describe('RoverInterpreter', () => {
    test('Interpreter should interpret a sequence of commands and return the updated rover', () => {
        // Given
        const planet = new Planet(100);
        const initialRover = new Rover(new Point(0, 0), Orientation.North, planet);
        const commandSequence = "F";
        
        // When
        const updatedRover = RoverInterpreter.Interpreter(commandSequence, initialRover);
        
        // Then
        expect(updatedRover.position).toEqual(new Point(0, 1));
    });

    test('Interpreter should interpret multiple commands and return the updated rover', () => {
        // Given
        const planet = new Planet(100);
        const initialRover = new Rover(new Point(0, 0), Orientation.North, planet);
        const commandSequence = "FLF";

        // When
        const updatedRover = RoverInterpreter.Interpreter(commandSequence, initialRover);
        
        // Then
        expect(updatedRover.position).toEqual(new Point(359, 1));
    });

    test('Interpreter should handle a sequence of commands with backward movements and return the updated rover', () => {
        // Given
        const planet = new Planet(100);
        const initialRover = new Rover(new Point(0, 0), Orientation.North, planet);
        const commandSequence = "B";

        // When
        const updatedRover = RoverInterpreter.Interpreter(commandSequence, initialRover);
        
        // Then
        expect(updatedRover.position).toEqual(new Point(0, 359));
    });

    test('Interpreter should handle multiple commands correctly', () => {
        // Given
        const planet = new Planet(100);
        const initialRover = new Rover(new Point(0, 0), Orientation.North, planet);
        const commandSequence = "FFLR";

        // When
        const updatedRover = RoverInterpreter.Interpreter(commandSequence, initialRover);
        
        // Then
        expect(updatedRover.position).toEqual(new Point(0, 2));
        expect(updatedRover.orientation).toEqual(Orientation.North);
    });

    test('Interpreter should handle complex command sequences correctly', () => {
        // Given
        const planet = new Planet(100);
        const initialRover = new Rover(new Point(0, 0), Orientation.North, planet);
        const commandSequence = "FFRFFLFF";

        // When
        const updatedRover = RoverInterpreter.Interpreter(commandSequence, initialRover);
        
        // Then
        expect(updatedRover.position).toEqual(new Point(2,4));
        expect(updatedRover.orientation).toEqual(Orientation.North);
    });
});
