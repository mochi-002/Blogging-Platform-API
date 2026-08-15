import mongoose from 'mongoose';
import 'dotenv/config';
import { logger } from '../middleware/logger.middleware.js';
export async function connectToDB() {
    logger.separator();
    try {
        await mongoose.connect(String(process.env.MONGO_URI));
        logger.info('Connected to mongoDB...');
    }
    catch (err) {
        const message = err instanceof Error ? err.message : String(err);
        logger.error(`Connecting to mongoDB failed`);
        logger.error(`${message}`);
    }
}
//# sourceMappingURL=db.js.map