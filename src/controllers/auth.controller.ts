import { NextFunction, Request, Response } from 'express';
import { CreateStudentDto, LoginUserDto } from '@dtos/users.dto';
import { RequestWithStudent, RequestWithUser } from '@interfaces/auth.interface';
import { StudentInt, User } from '@/interfaces/student.interface';
import AuthService from '@/services/studentsAuth.service';

class AuthController {
  public authService = new AuthService();

  public signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: CreateStudentDto = req.body;
      const signUpUserData: StudentInt = await this.authService.signup(userData);
      
      res.status(201).json({ data: signUpUserData, message: 'signup' });
    } catch (error) {
      next(error);
    }
  };

  public logIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: LoginUserDto = req.body;
      
      const { cookie, findUser } = await this.authService.login(userData);

      res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json({ data: findUser, message: 'login' });
    } catch (error) {
      next(error);
    }
  };

  public logOut = async (req: RequestWithStudent, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: StudentInt = req.user;
      const logOutUserData: StudentInt = await this.authService.logout(userData);

      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json({ data: logOutUserData, message: 'logout' });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
