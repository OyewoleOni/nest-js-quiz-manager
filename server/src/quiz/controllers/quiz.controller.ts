import { Body, Controller, Get, Param, ParseIntPipe, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from '../dtos/createQuiz.dto';
import { QuizService } from '../services/quiz.service';


@Controller('quiz')
export class QuizController {

    constructor(private quizService: QuizService) { }

    @Get()
    getAllQuizs() {
        return this.quizService.getAllQuiz();
    }

    @Get('/:id')
    async getQuizById(@Param('id', ParseIntPipe) id: number) {
        return await this.quizService.getQuizById(id);
    }

    @Post('/create')
    @UsePipes(ValidationPipe)
    async createQuiz(@Body() quizData: CreateQuizDto) {
        return await this.quizService.createNewQuiz(quizData);
    }
}
