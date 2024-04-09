"use strict";
const net = require("net");
const point_1 = require("./point");
const orientation_1 = require("./orientation");
const planet_1 = require("./planet");
const rover_1 = require("./rover");

const PORT = 2000;

const server = net.createServer(function (socket) {
    console.log('Rover connected');

    const planet = new planet_1.Planet(100);
    let rover = new rover_1.Rover(new point_1.Point(0, 0), orientation_1.Orientation.North, planet);

    socket.on('data', function (data) {
        const command = data.toString().trim(); // Lire la commande reçue du client
        console.log('Received command:', command);

        // Exécuter la commande sur le rover
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

        // Envoyer la nouvelle position du rover au client
        socket.write(JSON.stringify(rover.position));
    });

    socket.on('end', function () {
        console.log('Rover disconnected');
    });
});

server.listen(PORT, function () {
    console.log("Rover server listening on port " + PORT);
});
