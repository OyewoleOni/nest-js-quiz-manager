import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateQuizDto } from './dtos/createQuiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {

    constructor(private quizService: QuizService) { }

    @Get()
    getAllQuizs() {
        return this.quizService.getAllQuiz();
    }

    @Post()
    @UsePipes(ValidationPipe)
    createQuiz(@Body() quizData: CreateQuizDto) {
        return { data: quizData };
    }
}
