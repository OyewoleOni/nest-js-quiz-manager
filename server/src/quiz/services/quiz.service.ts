import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuizDto } from '../dtos/createQuiz.dto';
import { Quiz } from '../entities/quiz.entity';
import { QuizRepository } from '../repositories/quiz.repository';

@Injectable()
export class QuizService {

    constructor(@InjectRepository(Quiz) private quizRepository: Repository<Quiz>
    ) {

    }

    getAllQuiz() {
        return [1, 2, 3, 4]
    }

    async getQuizById(id: number): Promise<Quiz> {
        return await this.quizRepository.findOne({
            where: { id },
            relations: ['questions'],
        });
    }

    async createNewQuiz(quiz: CreateQuizDto) {
        return await this.quizRepository.save(quiz);
    }
}
