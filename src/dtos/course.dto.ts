import { IsNumber, IsString } from 'class-validator';

export class CreateCourseDto  {
  @IsString()
  public title: string;

  @IsString()
  public banner: string;

  @IsString()
  public category: string;

  @IsNumber()
  public price: number;

  @IsString()
  public creator: string;


}