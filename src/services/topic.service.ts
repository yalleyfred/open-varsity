import { hash } from 'bcrypt';
import { CreateTopicDto } from '@dtos/topic.dto';
import { HttpException } from '@exceptions/HttpException';
import { Topic } from '@interfaces/topic.interface';
import { Course } from '@/interfaces/course.interface';
import Topics from '@models/topics.model';
import Courses from '@models/course.model'
// import {LocalDB} from '../Database'
import { isEmpty } from '@utils/util';

class TopicService {
  public topic = Topics;
  public course = Courses;

  public async findAllTopics(): Promise<Topic[]> {
    // TopicMap(LocalDB);
    const topic = await this.topic.findAll();
    return topic;
  }

  public async findTopicById(userId: number): Promise<Topic> {
    // TopicMap(LocalDB);
    const findUser: Topic = await this.topic.findOne({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "User doesn't exist");
    
    return findUser;
  }

  public async createTopic(userData: CreateTopicDto): Promise<Topic> {
    // TopicMap(LocalDB);
    
    
    if (isEmpty(userData)) throw new HttpException(400, "CourseData is empty");

    const findCourse: {
      id: number;
      title: string;
    banner: string;
    category: string;
    price: number;
    creator: string;
    } = await this.course.findOne({
      where: {
        title: userData.course_id,
      },
    });
    console.log(findCourse);
    
    if (!findCourse) throw new HttpException(409, `This Course ${userData.course_id} does not exists`);

    let id = Number(findCourse.id);
    console.log(id);
    
    const findUser: Topic = await this.topic.findOne({
      where: {
        heading: userData.heading,
      },
    });
    
    if (findUser) throw new HttpException(409, `This Topic ${userData.heading} already exists`);

    let result = {
      heading: userData.heading,
      paragraph: userData.paragraph,
      illustration: userData.illustration,
      video: userData.video,
      reference: userData.reference,
      course_id: id,
    }
    await this.topic.create(result)
    return result;
  }

  public async updateTopic(userId: number, userData: CreateTopicDto): Promise<Topic[]> {
    // TopicMap(LocalDB);
    if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

    const findUser: Topic[] = await this.topic.findAll({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "User doesn't exist");

     // const hashedPassword = await hash(userData.password, 10);
     const updateUserData: Topic[] = await findUser.map((user: Topic) => {
      // if (user.id === userId) user = { first_name: userData.first_name, last_name: userData.last_name, email: userData.email, password: hashedPassword, gender: userData.gender, dob: userData.dob, nationality: userData.nationality, highest_qualifications: userData.highest_qualifications, phone: userData.phone, city: userData.city, sponsor_name: userData.sponsor_name, sponsor_email: userData.sponsor_email, sponsor_phone: userData.sponsor_phone };
      return user;
    });

    return updateUserData;
  }

  public async deleteTopic(userId: number): Promise<Topic[]> {
    // TopicMap(LocalDB)
    const findUser: Topic = await this.topic.findOne({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "User doesn't exist");


    const deleteUserData: Topic[] = (await this.findAllTopics())
    // .filter(user => user.id !== findUser.id)
    return deleteUserData;
  }
}

export default TopicService;
