import socketio from 'socket.io-client';
 
const io = socketio('http://localhost:3333', {
  transports: ['websocket'],
  autoConnect: false,
});

export default io;