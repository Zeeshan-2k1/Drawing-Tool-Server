const io = require('socket.io')(5000, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  socket.on('getDrawing', (id) => {
    const data = {};
    socket.join(id);
    socket.emit('loadDrawing', data);

    socket.on('sendData', (data) => {
      socket.broadcast.to(id).emit('recieveData', data);
    });
  });
});
