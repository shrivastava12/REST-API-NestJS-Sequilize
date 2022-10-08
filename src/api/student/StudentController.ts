import {Controller,Get,Post} from '@nestjs/common';
import { StudentService } from './StudentService';

@Controller('/student')

export class StudentController {
    private readonly service =  new StudentService();

    @Get()
    async getAllStudent(){
        return await this.service.getAllStudent();
    }
}