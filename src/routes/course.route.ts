import { Router } from 'express';
import CourseController from '@controllers/course.controller';
import { CreateCourseDto } from '@dtos/course.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';
import Storage from '@utils/multer';
class CourseRoute implements Routes {
  public path = '/api/course/';
  public router = Router();
  public CourseController = new CourseController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}content/:id`, this.CourseController.getCoursesContent)
    this.router.get(`${this.path}`, this.CourseController.getCourses);
    this.router.get(`${this.path}/:id(\\d+)`, this.CourseController.getCourseById);
    this.router.post(`${this.path}`, Storage.single('file'),  this.CourseController.createCourse);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateCourseDto, 'body', true), this.CourseController.updateCourse);
    this.router.delete(`${this.path}/:id(\\d+)`, this.CourseController.deleteCourse);
  }
}

export default CourseRoute;
