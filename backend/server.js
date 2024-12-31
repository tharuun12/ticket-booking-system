const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');
const http = require('http');
const authRoutes = require('./routes/auth');
const seatRoutes = require('./routes/seats');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(cors());
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/seats', seatRoutes);

if (process.env.NODE_ENV !== 'production') {
  const server = http.createServer(app);
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    console.log('New WebSocket connection');

    ws.on('message', (message) => {
      // Broadcast seat updates to all connected clients
      wss.clients.forEach((client) => {
        if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message);
        }
      });
    });
  });

  const PORT = process.env.PORT || 5000;
  server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export the app for Vercel
module.exports = app;