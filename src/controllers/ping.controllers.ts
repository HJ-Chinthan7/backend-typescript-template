import { Request, Response, NextFunction } from 'express';
import { InternalServerError } from '../utils/app.error';
import { logger } from '../config/logger.config';
export const pingHandler = async (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json({
            "message":"Request received successfully",
            "success":true
        });
    }
    catch (err) {
        logger.error(`Error in pingHandler `);
        throw new InternalServerError(`An error occurred while processing the request `);
    }
};
