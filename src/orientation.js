"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orientation = void 0;
var point_1 = require("./point");
var Orientation = /** @class */ (function () {
    function Orientation(value) {
        this.value = value;
    }
    Orientation.prototype.getValue = function () {
        return this.value;
    };
    Orientation.prototype.rotateLeft = function () {
        switch (this.value) {
            case 'N': return Orientation.West;
            case 'W': return Orientation.South;
            case 'S': return Orientation.East;
            case 'E': return Orientation.North;
            default: throw new Error('Invalid orientation');
        }
    };
    Orientation.prototype.rotateRight = function () {
        switch (this.value) {
            case 'N': return Orientation.East;
            case 'E': return Orientation.South;
            case 'S': return Orientation.West;
            case 'W': return Orientation.North;
            default: throw new Error('Invalid orientation');
        }
    };
    Orientation.prototype.moveForward = function (position, planet) {
        var newPosition = new point_1.Point(position.longitude, position.latitude);
        switch (this.value) {
            case 'N':
                newPosition = newPosition.incrementLatitude(1);
                break;
            case 'E':
                newPosition = newPosition.incrementLongitude(1);
                break;
            case 'S':
                newPosition = newPosition.DecrementLatitude(1);
                break;
            case 'W':
                newPosition = newPosition.DecrementLongitude(1);
                break;
        }
        return planet.wrapAround(newPosition);
    };
    Orientation.prototype.moveBackward = function (position, planet) {
        var newPosition = new point_1.Point(position.longitude, position.latitude);
        switch (this.value) {
            case 'N':
                newPosition = newPosition.DecrementLatitude(1);
                break;
            case 'E':
                newPosition = newPosition.DecrementLongitude(1);
                break;
            case 'S':
                newPosition = newPosition.incrementLatitude(1);
                break;
            case 'W':
                newPosition = newPosition.incrementLongitude(1);
                break;
        }
        return planet.wrapAround(newPosition);
    };
    Orientation.North = new Orientation('N');
    Orientation.East = new Orientation('E');
    Orientation.South = new Orientation('S');
    Orientation.West = new Orientation('W');
    return Orientation;
}());
exports.Orientation = Orientation;
