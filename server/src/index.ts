import {WebSocket, WebSocketServer} from 'ws';

const server: WebSocketServer = new WebSocketServer({ port: 8080 });

server.on('connection', (ws: WebSocket): void => {

    ws.on('message', (message: Buffer): void => {
        server.clients.forEach(client => client.send(message));
    });

    ws.on('close', (): void => {
       console.log('Client Disconnected');
       ws.close();
    });
});
