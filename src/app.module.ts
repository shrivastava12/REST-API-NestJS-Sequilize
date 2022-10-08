import { Module } from '@nestjs/common';
import { StudentModule } from './api/student';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
