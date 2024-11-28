import {WebSocket, WebSocketServer} from 'ws';

const server: WebSocketServer = new WebSocketServer({ port: 8080 });

server.on('connection', (ws: WebSocket) => {

    ws.on('message', (message: string) => {
        console.log(message);
        ws.send('Server Received your message.');
    });

    ws.on('close', () => {
       console.log('Client Disconnected');
       ws.close();
    });
});
