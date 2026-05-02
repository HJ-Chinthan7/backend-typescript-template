import express from "express";
import bodyparser from "body-parser";
import { serverConfig } from "./config";
import v1Router from "./router/v1";
import errorMiddlewareHandler from "./middleware/error.middleware";
import { logger } from "./config/logger.config";
import { loggerMiddleware } from "./middleware/logger.middleware";
const app=express();
app.use(loggerMiddleware);
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use('/api/v1/',v1Router);
app.use(errorMiddlewareHandler);

app.listen(serverConfig.PORT,()=>{
    logger.info(`Server is running on Port ${serverConfig.PORT}`);
});

