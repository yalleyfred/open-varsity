import { IsEmail, IsString } from 'class-validator';


export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public name: string;
}
export class CreateStudentDto  {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public first_name: string;

  @IsString()
  public last_name: string;

  @IsString()
  public gender: string;

  @IsString()
  public dob: string;

  @IsString()
  public nationality: string;

  @IsString()
  public highest_qualifications: string;

  @IsString()
  public phone: string;

  @IsString()
  public city: string;

  @IsString()
  public sponsor_name: string;

  @IsString()
  public sponsor_email: string;

  @IsString()
  public sponsor_phone: string;
}

export class LoginUserDto  {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

}




