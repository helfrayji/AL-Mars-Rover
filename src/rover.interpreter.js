"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoverInterpreter = void 0;
var rover_1 = require("./rover");
var point_1 = require("./point");
var orientation_1 = require("./orientation");
var RoverInterpreter = /** @class */ (function () {
    function RoverInterpreter() {
    }
    RoverInterpreter.Interpreter = function (commande, rover) {
        for (var _i = 0, commande_1 = commande; _i < commande_1.length; _i++) {
            var lettre = commande_1[_i];
            if (lettre === "F")
                rover = rover.moveForward();
            else if (lettre === "B")
                rover = rover.moveBackward();
            else if (lettre === "L")
                rover = rover.turnLeft();
            else if (lettre === "R")
                rover = rover.turnRight();
        }
        return rover;
    };
    RoverInterpreter.Deserialize = function (str, planet) {
        var orientation = str.endsWith('S') ? orientation_1.Orientation.South : orientation_1.Orientation.North;
        var latitude = str.startsWith('1') ? 1 : 0;
        return new rover_1.Rover(new point_1.Point(latitude, 0), orientation, planet);
    };
    RoverInterpreter.Serialize = function (rover) {
        return rover.position.latitude + ','
            + rover.position.longitude + ','
            + rover.orientation.toString().substring(0, 1);
    };
    return RoverInterpreter;
}());
exports.RoverInterpreter = RoverInterpreter;
