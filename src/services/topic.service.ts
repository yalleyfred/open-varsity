import { hash } from 'bcrypt';
import { CreateTopicDto } from '@dtos/topic.dto';
import { HttpException } from '@exceptions/HttpException';
import { Topic } from '@interfaces/topic.interface';
import Topics from '@models/topics.model';
// import {LocalDB} from '../Database'
import { isEmpty } from '@utils/util';

class TopicService {
  public topic = Topics;

  public async findAllTopics(): Promise<Topic[]> {
    // TopicMap(LocalDB);
    const topic: Topic[] = await this.topic.findAll();
    return topic;
  }

  public async findTopicById(userId: number): Promise<Topic> {
    // TopicMap(LocalDB);
    const findUser: Topic = await this.topic.findOne({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "User doesn't exist");
    console.log(findUser);
    
    return findUser;
  }

  public async createTopic(userData: CreateTopicDto): Promise<Topic> {
    // TopicMap(LocalDB);
    
    
    if (isEmpty(userData)) throw new HttpException(400, "CourseData is empty");

    const findUser: Topic = await this.topic.findOne({
      where: {
        heading: userData.heading,
      },
    });
    
    if (findUser) throw new HttpException(409, `This Course ${userData.heading} already exists`);

    await this.topic.create(userData)
    return userData;
  }

  public async updateTopic(userId: number, userData: CreateTopicDto): Promise<Topic[]> {
    // TopicMap(LocalDB);
    if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

    const findUser: Topic = await this.topic.findOne({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    const hashedPassword = await hash(userData.password, 10);
    const updateUserData: Topic[] = await this.topic.map((user: Topic) => {
      if (user.id === findUser.id) user = { id: userId, ...userData, password: hashedPassword };
      return user;
    });

    return updateUserData;
  }

  public async deleteTopic(userId: number): Promise<Topic[]> {
    // TopicMap(LocalDB)
    const findUser: Topic = await this.topic.findOne({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "User doesn't exist");


    const deleteUserData: Topic[] = (await this.findAllCourses()).filter(user => user.id !== findUser.id)
    return deleteUserData;
  }
}

export default TopicService;
