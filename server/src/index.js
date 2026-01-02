import 'dotenv/config';
import app from './app.js';
import { env } from './config/env.js';
import { connectDatabase } from './config/database.js';

const PORT = env.PORT;

// Connect to database and start server
const startServer = async () => {
  await connectDatabase();
  
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 Environment: ${env.NODE_ENV}`);
  });
};

startServer();
