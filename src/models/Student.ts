import {Table,Column,DataType,Model} from 'sequelize-typescript';
import {IsPositive} from 'class-validator';
import { Expose,Exclude } from 'class-transformer';

@Table
@Exclude()
export class Student extends Model<Student>{

    @Column({type:DataType.INTEGER,primaryKey:true,autoIncrement:true})
    @Expose()
    @IsPositive()
    id:number;

    @Column({})
    @Expose()
    name:string

}