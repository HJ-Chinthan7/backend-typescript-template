import winston from "winston";
import { getAsyncLocalStorage } from "../helper/request.helper";
import DailyRotateFile from "winston-daily-rotate-file";
export const logger=winston.createLogger({
format:winston.format.combine(
    winston.format.timestamp({format:"YYYY-MM-DD HH:mm:ss"}),
    winston.format.json(),
    winston.format.printf(({level,message,timestamp,...data})=>{
        const output={           
            timestamp,
            level,
            message,
            data,
            requestId:getAsyncLocalStorage()||"The function is not in the context of the asyncLocalStorage",
        }
        return JSON.stringify(output);

    })
),
transports:[
    new winston.transports.Console(),
    new DailyRotateFile({
        filename:"logs/application-%DATE%.log",
        datePattern:"YYYY-MM-DD",
        maxSize:"20m",
        maxFiles:"14d"
    }),
]
});