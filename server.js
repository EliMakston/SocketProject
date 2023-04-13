import express from 'express';
import { Server } from 'socket.io';
import http from 'http';
import morgan from 'morgan';
const app = express();
const server = http.createServer(app);
const io = new Server(server);

import * as url from 'url';
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const PORT = 3000;

app.use(express.static(__dirname + '/src'));
app.use(morgan('short'));

app.get('/', (req, res) => {

});

server.listen(PORT, () => {
    console.log(`Now listening on port: ${PORT}`);
});

io.on('connection', (socket) => {
    console.log(`New connection from ${socket.id}`);
    socket.on('disconnect', () => {
        console.log(`Disconnect from ${socket.id}`);
    });
});