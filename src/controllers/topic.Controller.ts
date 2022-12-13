import { NextFunction, Request, Response } from 'express';
import { CreateTopicDto } from '@dtos/topic.dto';
import { Topic } from '@interfaces/topic.interface';
import TopicService from '@/services/topic.service';


class TopicController {
  public topicService = new TopicService();

  public getTopics = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllUsersData: Topic[] = await this.topicService.findAllTopics();
      

      res.status(200).json({ data: findAllUsersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getTopicById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const findOneUserData: Topic = await this.topicService.findTopicById(userId);

      res.status(200).json({ data: findOneUserData, message: 'findOne' });
    } catch (error) {
      next(error);
    }
  };

  public createCourse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: CreateTopicDto = req.body;
      // console.log(userData);
      const createUserData: Topic = await this.topicService.createTopic(userData);

      res.status(201).json({ data: createUserData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

  public updateCourse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const userData: CreateTopicDto = req.body;
      const updateUserData: Topic[] = await this.topicService.updateTopic(userId, userData);

      res.status(200).json({ data: updateUserData, message: 'updated' });
    } catch (error) {
      next(error);
    }
  };

  public deleteCourse = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userId = Number(req.params.id);
      const deleteUserData: Topic[] = await this.topicService.deleteTopic(userId);

      res.status(200).json({ data: deleteUserData, message: 'deleted' });
    } catch (error) {
      next(error);
    }
  };
}

export default TopicController;
