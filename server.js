import express from 'express';
import { Server } from 'socket.io';
import http from 'http';
import morgan from 'morgan';
const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

app.use(morgan('short'));

app.get('/', (req, res) => {
    res.send('Hello world!');
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