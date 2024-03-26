import * as net from 'net';
import { Point } from './point';

const PORT = 2000;
const HOST = 'localhost';  
const client = new net.Socket();

client.connect(PORT, HOST, () => {
    console.log('Connected to rover server');

   
    client.write('F');  
    client.write('R');  
    client.write('F');  
     
});

client.on('data', data => {
    const position = JSON.parse(data.toString());
    console.log('Rover position:', position);
});

client.on('close', () => {
    console.log('Connection closed');
});
