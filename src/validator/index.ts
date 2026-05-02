import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod/v3";
import {  BadRequestError } from "../utils/app.error";
import { logger } from "../config/logger.config";
const validateRequestBody=(schema:AnyZodObject)=>{
    return async(req:Request,res:Response,next:NextFunction)=>{
     try{
         await schema.parseAsync(req.body);
         next();
     }  
        catch (err:any){
            logger.error(`Validation error in validateRequestBody middleware`);
            throw new BadRequestError(`Validation error `);
     }
    }
};

export default  validateRequestBody;