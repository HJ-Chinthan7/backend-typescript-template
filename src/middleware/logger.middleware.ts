import { v4 as uuidv4 } from 'uuid';
import { asyncLocalStorage } from "../helper/request.helper";
import { Request, Response, NextFunction } from "express";
export const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const requestId = uuidv4();
    asyncLocalStorage.run({ requestId: requestId }, () => {
        next();
    });
}