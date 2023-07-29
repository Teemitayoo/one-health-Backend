import 'reflect-metadata';
import app from './app';
import logger from './utils/logging/logger';
import { Application } from 'express';
import { connectDB } from './utils/database/mongoSetup';

class Server {
  private port = process.env.PORT || 8000;
  private app: Application;
  constructor(app: Application) {
    this.app = app;
    this.connectDatabase();
  }

  async connectDatabase() {
    await connectDB();
  }

  start() {
    this.app.listen(this.port, () => {
      logger.info(`Listening on url http://localhost:${this.port}`);
    });
  }
}

const server = new Server(app);
server.start();
