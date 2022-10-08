import { Student } from "src/models";


export class StudentService{

    async getAllStudent(){
        return await Student.findAll()
    }
}