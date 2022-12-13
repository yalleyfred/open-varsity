import { hash } from 'bcrypt';
import { CreateCourseDto } from '@dtos/course.dto';
import { HttpException } from '@exceptions/HttpException';
import { Course } from '@interfaces/course.interface';
import Courses from '@models/course.model';
// import {LocalDB} from '../Database'
import { isEmpty } from '@utils/util';
import Topics from '@/models/topics.model';

class CourseService {
  public course = Courses;

  public async findAllCoursesContent(): Promise<Course[]> {
    // CourseMap(LocalDB);
    const course: Course[] = await this.course.findAll({
      include: [{
        model: Topics,
        as: 'topics'
      }],
      where:{
        id: 1
      }
    });
    return course;
  }

  public async findAllCourses(): Promise<Course[]> {
    // CourseMap(LocalDB);
    const course: Course[] = await this.course.findAll();
    return course;
  }

  public async findCourseById(userId: number): Promise<Course> {
    // CourseMap(LocalDB);
    const findUser: Course = await this.course.findOne({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "User doesn't exist");
    console.log(findUser);
    
    return findUser;
  }

  public async createCourse(userData: CreateCourseDto): Promise<Course> {
    // CourseMap(LocalDB);
    
    
    if (isEmpty(userData)) throw new HttpException(400, "CourseData is empty");

    const findUser: Course = await this.course.findOne({
      where: {
        title: userData.title,
      },
    });
    
    if (findUser) throw new HttpException(409, `This Course ${userData.title} already exists`);

    await this.course.create(userData)
    return userData;
  }

  public async updateCourse(userId: number, userData: CreateCourseDto): Promise<Course[]> {
    // CourseMap(LocalDB);
    if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

    const findUser: Course = await this.course.findOne({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    const hashedPassword = await hash(userData.password, 10);
    const updateUserData: Course[] = await this.course.map((user: Course) => {
      if (user.id === findUser.id) user = { id: userId, ...userData, password: hashedPassword };
      return user;
    });

    return updateUserData;
  }

  public async deleteCourse(userId: number): Promise<Course[]> {
    // CourseMap(LocalDB)
    const findUser: Course = await this.course.findOne({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "User doesn't exist");


    const deleteUserData: Course[] = (await this.findAllCourses()).filter(user => user.id !== findUser.id)
    return deleteUserData;
  }
}

export default CourseService;
