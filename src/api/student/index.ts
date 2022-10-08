import { Module } from "@nestjs/common";
import { StudentController } from "./StudentController";


@Module({
    controllers:[StudentController],
    providers:[],
    exports:[],
})

export class StudentModule {}