import * as net from 'net';

const PORT = 2000;
const HOST = 'localhost';

const client = new net.Socket();

client.connect(PORT, HOST, () => {
    console.log('Connected to rover server');
    process.stdin.on('data', (data) => {
        const command = data.toString().trim();
        client.write(command);
    });
});

client.on('data', (data) => {
    const position = JSON.parse(data.toString());
    console.log('Rover position:', position);
});

client.on('close', () => {
    console.log('Connection closed');
});
