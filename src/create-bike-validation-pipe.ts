import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException   } from "@nestjs/common";
import { ObjectSchema } from 'joi';
import { createBikeSchema } from "./bike/create-bike-schema";
import { CreateBikeDto } from "./db/dto/create-bike.dto";

@Injectable()
export class CreateBikeValidationPipe  implements PipeTransform<CreateBikeDto>{    
    public transform(value: CreateBikeDto, metadata: ArgumentMetadata ){
        const result =createBikeSchema.validate(value);
        const {error} = result;
        if(error){
            const errorMessages = result.error.details.map((d) => d.message).join();
            throw new BadRequestException(errorMessages);
        }
        return value;
    }
}
