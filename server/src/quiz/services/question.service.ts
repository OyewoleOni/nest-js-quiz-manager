import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateQuestionDto } from 'src/quiz/dtos/create-question.dto';
import { Question } from 'src/quiz/entities/question.entity';
import { Quiz } from 'src/quiz/entities/quiz.entity';
import { Repository } from 'typeorm';

@Injectable()
export class QuestionService {
    constructor(@InjectRepository(Question) private questionRepository: Repository<Question>) { }

    async findQuestionById(id: number) {
        return await this.questionRepository.findOne({
            where: { id },
            relations: ['quiz', 'options']
        })
    }

    async createNewQuestion(question: CreateQuestionDto, quiz: Quiz): Promise<Question> {

        const newQuestion = await this.questionRepository.save({
            question: question.question,
        })

        quiz.questions = [...quiz.questions, newQuestion]
        await quiz.save();

        return newQuestion;
    }
}
