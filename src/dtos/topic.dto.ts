import { IsNumber, IsString, IsArray } from 'class-validator';

export class CreateTopicDto  {
  @IsString()
  public heading: string;

  @IsArray()
  public paragraph: string[];

  @IsString()
  public illustration: string;

  @IsString()
  public video: string;

  @IsString()
  public reference: string;

  @IsString()
  public course_id: string;

}