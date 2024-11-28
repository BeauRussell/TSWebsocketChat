import { WebSocket } from 'ws';
import * as readline from 'readline';

const ws: WebSocket = new WebSocket('ws://localhost:8080');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

ws.on('open', (): void => {
    rl.question('What is your name?\n', (answer: string): void => {
        ws.send(`${answer} has joined the chat!`)
    });
});

ws.on('message', (message: Buffer): void => {
    console.log(message.toString());
    rl.question('Type a message: ', (answer: string): void => {
        ws.send(answer);
    });
});

ws.on('close', (): void => {
    console.log('Client disconnected!');
});
