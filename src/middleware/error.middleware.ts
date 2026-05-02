import { NextFunction, Request, Response } from "express";
import { appError } from "../utils/app.error";
const errorMiddlewareHandler = (err: appError,req:Request,res:Response,next:NextFunction)=>{
    res.status(err.statusCode ).json({
        "message":err.message,
        "success":false,
        "Error name":err.name
    });
};

export default errorMiddlewareHandler;