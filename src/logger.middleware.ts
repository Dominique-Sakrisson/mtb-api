/**
 * This is an example of a piece of functinoal middleware/ 
 */
import { Request, Response, NextFunction } from 'express';

export function loggerFunc(req: Request, res: Response, next: NextFunction) {
        const message: string = `Function Logger Request... ${new Date(Date.now())}` 
        
        console.log(message + req );
  next();
};

/**
 * This is an example of a piece of class based middle ware 
 */
import { Injectable, NestMiddleware  } from "@nestjs/common";
// import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware{
    use(req: Request, res : Response, next: NextFunction){
        const message: string = `Class Logger Request... ${new Date(Date.now())}` 
        console.log(message);
        next();
    }
}
