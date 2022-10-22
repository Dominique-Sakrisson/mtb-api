import { PhotoModel } from './photo';
import { Table, Column, Model, CreatedAt, UpdatedAt,DeletedAt, DataType, PrimaryKey, AutoIncrement, AllowNull, Default, Unique } from 'sequelize-typescript';
const {TEXT, NUMBER} = DataType

@Table({ tableName: "bikes" })
export class BikeModel extends Model {
    @Column({type: TEXT, allowNull: false})
    name: string;
    
    @Column({type: TEXT, allowNull: false})
    manufacturer: string;
    
    @Column({type: TEXT, allowNull: false})
    model: string;

    @Column({
        type: DataType.ENUM,
        values: ['aluminum', 'carbon'],
        allowNull: false,
    })
    material: string;
    
    @Default(false)
    @Column({type: TEXT, allowNull: false})
    inStock: boolean
    
    @Default(Date.now())
    @CreatedAt
    @Column
    creationDate: Date;
    
    @Default(Date.now())
    @UpdatedAt
    @Column
    updatedOn: Date;

    @Default(null)
    @AllowNull
    @DeletedAt
    @Column
    deletionDate: Date;

    // @OneToMany(type => PhotoModel, photo => photo.user)
    // photos: PhotoModel[];
}
