"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var orientation_1 = require("./orientation");
var planet_1 = require("./planet");
var rover_1 = require("./rover");
var obstacle_1 = require("./obstacle");
var planet = new planet_1.Planet(100);
var rover = new rover_1.Rover(new point_1.Point(0, 0), orientation_1.Orientation.North, planet);
var obstaclePosition = new point_1.Point(3, 1);
var obstacle = new obstacle_1.Obstacle(obstaclePosition);
planet.addObstacle(obstacle);
rover = rover.moveForward();
rover = rover.turnRight();
rover = rover.moveForward();
rover = rover.moveForward();
console.log("Position finale du rover :", rover.position);
// Vérifie si le rover aurait dû toucher un obstacle
if (planet.isObstacle(rover.position.incrementLongitude(1))) {
    console.log("Le rover aurait dû rencontrer un obstacle à la position :", obstaclePosition);
}
if (planet.isObstacle(rover.position.incrementLatitude(1))) {
    console.log("Le rover aurait dû rencontrer un obstacle à la position :", obstaclePosition);
}
if (planet.isObstacle(rover.position.DecrementLongitude(1))) {
    console.log("Le rover aurait dû rencontrer un obstacle à la position :", obstaclePosition);
}
if (planet.isObstacle(rover.position.DecrementLatitude(1))) {
    console.log("Le rover aurait dû rencontrer un obstacle à la position :", obstaclePosition);
}
