/**
 * This is an example of a piece of functinoal middleware/ 
 */
 import { HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

 export function errorTrailDelete(req: Request, res: Response, next: NextFunction) {
    console.log(req);
    throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Trails may not be deleted'
      }, HttpStatus.FORBIDDEN)
   next();
 };
 

