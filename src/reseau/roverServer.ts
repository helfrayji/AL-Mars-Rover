import * as net from 'net';
import { Point } from '../domain/point';
import { Orientation } from '../domain/orientation';
import { Planet } from '../conf/planet';
import { Rover } from '../domain/rover';

const PORT = 2000;

const server = net.createServer(socket => {
    const planet = new Planet(100);
    let rover = new Rover(new Point(0, 0), Orientation.North, planet);

    socket.on('data', data => {
        const command = data.toString().trim();
        switch (command) {
            case 'F':
                rover = rover.moveForward();
                break;
            case 'B':
                rover = rover.moveBackward();
                break;
            case 'L':
                rover = rover.turnLeft();
                break;
            case 'R':
                rover = rover.turnRight();
                break;
            default:
                console.log('Invalid command');
        }
        socket.write(JSON.stringify(rover.position));
    });

    socket.on('end', () => {
        console.log('Rover disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Rover server listening on port ${PORT}`);
});
