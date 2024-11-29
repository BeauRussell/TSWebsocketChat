import { WebSocket } from 'ws';
import * as readline from 'readline';

const ws: WebSocket = new WebSocket('ws://localhost:8080');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let name: string;

ws.on('open', (): void => {
    rl.question('Username: ', (answer: string): void => {
        name = answer;
        ws.send(`${name} has joined the chat!`);
        allowSendMessage();
    });
});

ws.on('message', (message: Buffer): void => {
    if (!message.toString().startsWith(`${name}`)) {
        console.log(message.toString());
    }
});

ws.on('close', (): void => {
    console.log('Client disconnected!');
});

function allowSendMessage(): void {
    rl.question('Type a message: ', (answer: string): void => {
        const message: string = `${name}: ${answer}`;
        ws.send(message);
        allowSendMessage();
    });
}
