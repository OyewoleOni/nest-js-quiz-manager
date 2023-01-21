import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuestionDto } from '../dtos/create-question.dto';
import { Question } from '../entities/question.entity';

import { QuestionService } from '../services/question.service';
import { QuizService } from '../services/quiz.service';


@Controller('question')
export class QuestionController {

    constructor(private questionService: QuestionService, private quizService: QuizService) { }

    @Get()
    async getAllQuestions(): Promise<number[]> {
        return [1, 2]
    }

    @Get("/:id")
    async getQuestionById(@Param('id', ParseIntPipe) id: number) {
        return await this.questionService.findQuestionById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() question: CreateQuestionDto): Promise<Question> {
        const quiz = await this.quizService.getQuizById(question.quizId);
        return await this.questionService.createNewQuestion(question, quiz);
    }
}
