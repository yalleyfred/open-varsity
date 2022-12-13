import { Router } from 'express';
import AuthController from '@controllers/adminAuth.controller';
import StudentController from '@/controllers/student.controller';
import { CreateUserDto, LoginUserDto } from '@dtos/users.dto';
import { Routes } from '@interfaces/routes.interface';
import authMiddleware from '@middlewares/auth.middleware';
import validationMiddleware from '@middlewares/validation.middleware';

class AdminAuthRoute implements Routes {
    public path = '/admin/';
    public router = Router();
    public authController = new AuthController();
    public studentController = new StudentController();
  
    constructor() {
      this.initializeRoutes();
    }
  
    private initializeRoutes() {
      this.router.get(`${this.path}students`, this.studentController.getUsers);
      this.router.get(`${this.path}`, this.authController.getUsers);
      this.router.post(`${this.path}signup`, validationMiddleware(CreateUserDto, 'body'), this.authController.signUp);
      this.router.post(`${this.path}login`, validationMiddleware(LoginUserDto, 'body'), this.authController.logIn);
      this.router.post(`${this.path}logout`, authMiddleware, this.authController.logOut);
    }
  }
  
  export default AdminAuthRoute;