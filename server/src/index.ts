import {WebSocket, WebSocketServer} from 'ws';

const server: WebSocketServer = new WebSocketServer({ port: 8080 });

server.on('connection', (ws: WebSocket): void => {

    ws.on('message', (message: string): void => {
        console.log(message);
        server.clients.forEach(client => client.send(message));
    });

    ws.on('close', (): void => {
       console.log('Client Disconnected');
       ws.close();
    });
});
