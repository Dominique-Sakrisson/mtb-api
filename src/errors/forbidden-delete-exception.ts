import { HttpException, HttpStatus } from "@nestjs/common";


export class ForbiddenDeleteException extends HttpException{
    constructor(){
      super('Forbidden', HttpStatus.FORBIDDEN);
    }
   }
  