"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rover = void 0;
var Rover = /** @class */ (function () {
    function Rover(position, orientation, planet) {
        this.position = position;
        this.orientation = orientation;
        this.planet = planet;
    }
    Rover.prototype.moveForward = function () {
        var newPosition = this.orientation.moveForward(this.position, this.planet);
        if (!this.planet.isObstacle(newPosition)) {
            return new Rover(newPosition, this.orientation, this.planet);
        }
        return this;
    };
    Rover.prototype.moveBackward = function () {
        var newPosition = this.orientation.moveBackward(this.position, this.planet);
        if (!this.planet.isObstacle(newPosition)) {
            return new Rover(newPosition, this.orientation, this.planet);
        }
        return this;
    };
    Rover.prototype.turnLeft = function () {
        var newOrientation = this.orientation.rotateLeft();
        return new Rover(this.position, newOrientation, this.planet);
    };
    Rover.prototype.turnRight = function () {
        var newOrientation = this.orientation.rotateRight();
        return new Rover(this.position, newOrientation, this.planet);
    };
    return Rover;
}());
exports.Rover = Rover;
