import { Router } from 'express';
import StudentController from '@/controllers/student.controller';
import { CreateUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class StudentRoute implements Routes {
  public path = '/students/';
  public router = Router();
  public StudentController = new StudentController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.StudentController.getUsers);
    this.router.get(`${this.path}/:id(\\d+)`, this.StudentController.getUserById);
    this.router.post(`${this.path}`, validationMiddleware(CreateUserDto, 'body'), this.StudentController.createUser);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateUserDto, 'body', true), this.StudentController.updateUser);
    this.router.delete(`${this.path}/:id(\\d+)`, this.StudentController.deleteUser);
  }
}

export default StudentRoute;
