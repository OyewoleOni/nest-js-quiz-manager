import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDto } from '../dtos/createQuiz.dto';
import { Question } from '../entities/question.entity';
import { Quiz } from '../entities/quiz.entity';

@Injectable()
export class QuizService {

    constructor(@InjectRepository(Quiz) private quizRepository: Repository<Quiz>
    ) {

    }

    async getAllQuiz(): Promise<Quiz[]> {
        return await this.quizRepository.createQueryBuilder('q')
            .leftJoinAndSelect('q.questions', 'qt')
            .leftJoinAndSelect('qt.options', 'o')
            .getMany();
    }

    async getQuizById(id: number): Promise<Quiz> {
        return await this.quizRepository.findOne({
            where: { id },
            relations: ['questions', 'questions.options'],
        });
    }

    async createNewQuiz(quiz: CreateQuizDto) {
        return await this.quizRepository.save(quiz);
    }
}
