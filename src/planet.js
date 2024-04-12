"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planet = void 0;
var point_1 = require("./point");
var FULL_CIRCLE_DEGREES = 360;
var Planet = /** @class */ (function () {
    function Planet(radius) {
        this.radius = radius;
        this.obstacles = [];
    }
    Planet.prototype.addObstacle = function (obstacle) {
        this.obstacles.push(obstacle);
    };
    Planet.prototype.isObstacle = function (point) {
        return this.obstacles.some(function (obstacle) { return obstacle.position.longitude === point.longitude && obstacle.position.latitude === point.latitude; });
    };
    Planet.prototype.wrapAround = function (point) {
        var wrappedLongitude = (point.longitude + FULL_CIRCLE_DEGREES) % FULL_CIRCLE_DEGREES;
        var wrappedLatitude = (point.latitude + FULL_CIRCLE_DEGREES) % FULL_CIRCLE_DEGREES;
        return new point_1.Point(wrappedLongitude, wrappedLatitude);
    };
    Planet.prototype.getObstacles = function () {
        return this.obstacles;
    };
    return Planet;
}());
exports.Planet = Planet;
