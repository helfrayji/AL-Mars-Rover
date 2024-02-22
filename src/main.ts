import { Point } from "./point";
import { Orientation } from "./orientation";
import { Planet } from "./planet";
import { Rover } from "./rover";
import { Obstacle } from "./obstacle";

const planet = new Planet(100);
let rover = new Rover(new Point(0, 0), Orientation.North, planet);

const obstaclePosition = new Point(3, 1);
const obstacle = new Obstacle(obstaclePosition);
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
