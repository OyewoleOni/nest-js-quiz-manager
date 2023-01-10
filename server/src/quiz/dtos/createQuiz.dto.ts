
import { IsAlphanumeric, MaxLength, IsNotEmpty, Length } from "class-validator";
export class CreateQuizDto {


    @Length(3, 255)
    @IsNotEmpty({ message: 'The quiz should have a title' })
    title: string;

    @Length(3)
    @IsNotEmpty()
    description: string;
}