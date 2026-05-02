export interface appError extends Error{
    statusCode:number;
}

export class InternalServerError implements appError{
    statusCode:number;
    message:string;
    name:string;
    constructor(message:string){
        this.statusCode=500;
        this.name="InternalServerError";
        this.message=message;
    }
};

export class BadRequestError implements appError{
    statusCode: number;
    message:string;
    name:string;
    constructor(message:string){
        this.statusCode=400;
        this.name="BadRequestError";
        this.message=message;
    }
};

export class NotFoundError implements appError{
    statusCode: number;
    message:string;
    name:string;
    constructor(message:string){
        this.statusCode=404;
        this.name="NotFoundError";
        this.message=message;
    }
};
