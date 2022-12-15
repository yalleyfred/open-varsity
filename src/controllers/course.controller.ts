import { NextFunction, Request, Response } from 'express';
import { CreateCourseDto } from '@dtos/course.dto';
import { Course } from '@interfaces/course.interface';
import CourseService from '@/services/course.service';

// import {LocalDB} from '../Database'

class CourseController {
  public courseService = new CourseService();

  public getCoursesContent = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const findAllUsersData: Course[] = await this.courseService.findAllCoursesContent(userId);
      

      res.status(200).json({ data: findAllUsersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getCourses = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllUsersData: Course[] = await this.courseService.findAllCourses();
      

      res.status(200).json({ data: findAllUsersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getCourseById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const findOneUserData: Course = await this.courseService.findCourseById(userId);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createCourse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: CreateCourseDto = req.body;
      // console.log(userData);
      const createUserData: Course = await this.courseService.createCourse(userData);

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateCourse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const userData: CreateCourseDto = req.body;
      const updateUserData: Course[] = await this.courseService.updateCourse(userId, userData);

      res.status(200).json({ data: updateUserData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteCourse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const deleteUserData: Course[] = await this.courseService.deleteCourse(userId);

      res.status(200).json({ data: deleteUserData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default CourseController;
