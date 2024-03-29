import net from 'net';
import { Planet } from '../src/planet';
import { Point } from '../src/point';
import { Orientation } from '../src/orientation';
import { Rover } from '../src/rover';

describe('Rover Server', () => {
    let server: net.Server;
    let client: net.Socket;
    let planet: Planet;
    let rover: Rover;

    beforeAll(done => {
        server = net.createServer();
        server.listen(0, 'localhost', () => {
            const { port } = server.address() as net.AddressInfo;
            client = net.createConnection(port, 'localhost', () => {
                done();
            });
        });
    });

    afterAll(done => {
        client.end();
        server.close(() => {
            done();
        });
    });

    beforeEach(() => {
        planet = new Planet(100);
        rover = new Rover(new Point(0, 0), Orientation.North, planet);
    });

    test('Given rover server is connected when it receives "F" command then it should move the rover forward', done => {
        // Given
        const command = 'F';

        // When
        client.write(command);

        // Then
        client.on('data', data => {
            const position = JSON.parse(data.toString());
            expect(position).toEqual(new Point(0, 1));
            done();
        });
    });

    test('Given rover server is connected when it receives "B" command then it should move the rover backward', done => {
        // Given
        const command = 'B';

        // When
        client.write(command);

        // Then
        client.on('data', data => {
            const position = JSON.parse(data.toString());
            expect(position).toEqual(new Point(0, 359));
            done();
        });
    });

    test('Given rover server is connected when it receives "L" command then it should turn the rover left', done => {
        // Given
        const command = 'L';

        // When
        client.write(command);

        // Then
        client.on('data', data => {
            const position = JSON.parse(data.toString());
            expect(position).toEqual(new Point(0, 0));
            expect(rover.orientation).toEqual(Orientation.West);
            done();
        });
    });

    test('Given rover server is connected when it receives "R" command then it should turn the rover right', done => {
        // Given
        const command = 'R';

        // When
        client.write(command);

        // Then
        client.on('data', data => {
            const position = JSON.parse(data.toString());
            expect(position).toEqual(new Point(0, 0));
            expect(rover.orientation).toEqual(Orientation.East);
            done();
        });
    });

    test('Given rover server is connected when it receives an invalid command then it should not move the rover', done => {
        // Given
        const command = 'X';

        // When
        client.write(command);

        // Then
        client.on('data', data => {
            const position = JSON.parse(data.toString());
            expect(position).toEqual(new Point(0, 0));
            done();
        });
    });
});