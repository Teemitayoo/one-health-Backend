import "reflect-metadata";
import app from './app';
//import logger from './utils/logging/winston';
import { Application } from 'express';
 
class Server {
  private port = process.env.PORT || 8000;
  private app;
  constructor(app: Application) {
      this.app = app;
  }

  start() {
      this.app.listen(this.port, () => {
       // logger.info(`Listening on url http://localhost:${this.port}`);
      })
  }
}

const server =  new Server(app);
server.start()
