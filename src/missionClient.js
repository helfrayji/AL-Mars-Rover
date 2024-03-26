"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var net = require("net");
var PORT = 2000;
var HOST = 'localhost';
var client = new net.Socket();
client.connect(PORT, HOST, function () {
    console.log('Connected to rover server');
    client.write('F');
    client.write('R');
    client.write('F');
});
client.on('data', function (data) {
    var position = JSON.parse(data.toString());
    console.log('Rover position:', position);
});
client.on('close', function () {
    console.log('Connection closed');
});
