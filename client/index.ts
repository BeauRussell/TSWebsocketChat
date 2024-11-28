import { WebSocket } from 'ws';

const ws: WebSocket = new WebSocket('ws://localhost:8080');

ws.on('open', (): void => {
    console.log('Client connected!');

    ws.send('Hello');
});

ws.on('message', (message: string): void => {
    console.log(message);
});

ws.on('close', (): void => {
    console.log('Client disconnected!');
});