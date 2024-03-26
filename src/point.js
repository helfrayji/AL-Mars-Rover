"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(longitude, latitude) {
        this.longitude = longitude;
        this.latitude = latitude;
    }
    Point.prototype.incrementLongitude = function (amount) {
        var newLongitude = (this.longitude + amount) % 360;
        return new Point(newLongitude, this.latitude);
    };
    Point.prototype.incrementLatitude = function (amount) {
        var newLatitude = (this.latitude + amount) % 360;
        return new Point(this.longitude, newLatitude);
    };
    Point.prototype.DecrementLongitude = function (amount) {
        var newLongitude = (this.longitude - amount) % 360;
        return new Point(newLongitude, this.latitude);
    };
    Point.prototype.DecrementLatitude = function (amount) {
        var newLatitude = (this.latitude - amount) % 360;
        return new Point(this.longitude, newLatitude);
    };
    return Point;
}());
exports.Point = Point;
