import { NextFunction, Request, Response } from 'express';
import { CreateStudentDto } from '@dtos/users.dto';
import { User, StudentInt } from '@/interfaces/student.interface';
import studentService from '@/services/students.service';
import Admins from '@models/admins.model';
// import {LocalDB} from '../Database'

class StudentController {
  public studentService = new studentService();

  public getUsers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllUsersData: StudentInt[] = await this.studentService.findAllUser();
    
      
      res.status(200).json({ data: findAllUsersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const findOneUserData: StudentInt = await this.studentService.findUserById(userId);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: CreateStudentDto = req.body;
      // console.log(userData);
      const createUserData: StudentInt = await this.studentService.createUser(userData);

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const userData: CreateStudentDto = req.body;
      const updateUserData: StudentInt[] = await this.studentService.updateUser(userId, userData);

      res.status(200).json({ data: updateUserData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const deleteUserData: StudentInt[] = await this.studentService.deleteUser(userId);

      res.status(200).json({ data: deleteUserData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default StudentController;
