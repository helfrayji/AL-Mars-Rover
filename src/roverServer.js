"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var net = require("net");
var point_1 = require("./point");
var orientation_1 = require("./orientation");
var planet_1 = require("./planet");
var rover_1 = require("./rover");
var PORT = 2000;
var server = net.createServer(function (socket) {
    console.log('Rover connected');
    // Créer une instance de la planète avec la taille appropriée
    var planet = new planet_1.Planet(100); // Exemple de taille 100 pour la planète, à remplacer par la taille réelle
    // Initialisez le rover avec la position de départ, l'orientation et la planète
    var rover = new rover_1.Rover(new point_1.Point(0, 0), orientation_1.Orientation.North, planet); // Initial position and orientation of the rover
    socket.on('data', function (data) {
        var command = data.toString().trim(); // Assuming command comes as a string
        console.log('Received command:', command);
        // Process the command and update rover's position
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
        // Send the updated position back to the mission
        socket.write(JSON.stringify(rover.position));
    });
    socket.on('end', function () {
        console.log('Rover disconnected');
    });
});
server.listen(PORT, function () {
    console.log("Rover server listening on port ".concat(PORT));
});
