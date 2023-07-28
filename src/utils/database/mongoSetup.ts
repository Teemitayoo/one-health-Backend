import mongoose from "mongoose";
import logger from "../logging/logger";
import { InternalServerError } from "../../common/error";

export const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URI}`)
        logger.info('Database connected successfully.');
    } catch(error: any) {
        logger.error(`Unable to connect to the database: ${error}`);
        throw new InternalServerError("Unable to Connect to Database")
    }
}