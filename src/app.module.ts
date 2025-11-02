import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    StudentModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot('mongodb://localhost/student'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
