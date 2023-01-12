import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Quiz } from './entities/quiz.entity';
import { QuizController } from './quiz.controller';
import { QuizService } from './quiz.service';
import { QuizRepository } from './repositories/quiz.repository';

@Module({
  controllers: [QuizController],
  imports: [TypeOrmModule.forFeature([Quiz])],
  providers: [QuizService]
})
export class QuizModule { }
