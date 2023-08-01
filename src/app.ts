import 'reflect-metadata';
import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { ErrorHandler } from './common/error';
import { Application } from 'express';
import { router as authRouter } from './modules/auth/auth.router';

const app: Application = express();

app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', authRouter);

// A route to health check the server
app.use('/', (req:Request, res:Response)=>{
    return res.status(200).json({success:true, message:"Health Check Successfull"})
})


app.use('*', ErrorHandler.pagenotFound());
app.use(ErrorHandler.handle());
ErrorHandler.exceptionRejectionHandler();

export default app;
