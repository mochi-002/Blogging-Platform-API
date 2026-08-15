import express, {} from 'express';
import 'dotenv/config';
import { requestsLogger, serverLogger } from './middleware/logger.middleware.js';
import { connectToDB } from './config/db.js';
import { postsRouter } from './routes/post.router.js';
import { errorHandler, notFound } from './middleware/errors.middlewares.js';
// Connect to DB
connectToDB();
// Initialize app
const app = express();
// middlewares
app.use(express.json());
app.use(requestsLogger);
// routes
app.use("/posts", postsRouter);
// error handel
app.use(notFound);
app.use(errorHandler);
// server start
const PORT = Number(process.env.PORT);
app.listen(PORT, () => {
    serverLogger(PORT);
});
//# sourceMappingURL=server.js.map