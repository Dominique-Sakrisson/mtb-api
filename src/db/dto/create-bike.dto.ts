export class CreateBikeDto{
    readonly name: string;
    readonly manufacturer: string
    readonly model: string;
    readonly material: string;
    readonly inStock: boolean;
    readonly creationDate: Date;
    readonly updatedOn: Date;
    readonly deletionDate: Date;
}
