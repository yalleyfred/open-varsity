import { Router } from 'express';
import TopicController from '@controllers/topic.Controller';
import { CreateTopicDto } from '@dtos/topic.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class TopicRoute implements Routes {
  public path = '/api/topics/';
  public router = Router();
  public TopicController = new TopicController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.TopicController.getTopics);
    this.router.get(`${this.path}/:id(\\d+)`, this.TopicController.getTopicById);
    this.router.post(`${this.path}`, validationMiddleware(CreateTopicDto, 'body'), this.TopicController.createCourse);
    this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateTopicDto, 'body', true), this.TopicController.updateCourse);
    this.router.delete(`${this.path}/:id(\\d+)`, this.TopicController.deleteCourse);
  }
}

export default TopicRoute;
