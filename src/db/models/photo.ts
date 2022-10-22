import { Entity, Column, PrimaryGeneratedColumn, ManyToOne  } from 'typeorm';
import { BikeModel } from './bike';

@Entity()
export class PhotoModel  {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    user: number;
    
    @Column()
    manufacturer: string;
    
    @Column()
    model: string;
    
    @Column({default: false})
    inStock: boolean

    @ManyToOne(type => PhotoModel, photo => photo.user)
    photos: PhotoModel[];
}
