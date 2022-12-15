import { hash } from 'bcrypt';
import { CreateStudentDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { StudentInt, User } from '@/interfaces/student.interface';
import Student from '@models/students.model';
// import {LocalDB} from '../Database'
import { isEmpty } from '@utils/util';

class StudentService {
  public users = Student;

  public async findAllUser(): Promise<StudentInt[]> {
    // AdminMap(LocalDB);
    const users: StudentInt[] = await this.users.findAll();
    return users;
  }

  public async findUserById(userId: number): Promise<StudentInt> {
    // AdminMap(LocalDB);
    const findUser: StudentInt = await this.users.findOne({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "User doesn't exist");
    console.log(findUser);
    
    return findUser;
  }

  public async createUser(userData: CreateStudentDto): Promise<StudentInt> {
    // AdminMap(LocalDB);
    
    
    if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

    const findUser: StudentInt = await this.users.findOne({
      where: {
        email: userData.email,
      },
    });
    
    if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: {
      first_name: string;
      last_name: string;
      email: string;
      password: string;
      gender: string;
      dob: string;
      nationality: string;
      highest_qualifications: string;
      phone: string;
      city: string;
      sponsor_name: string;
      sponsor_email: string;
      sponsor_phone: string;
    }= { first_name: userData.first_name, last_name: userData.last_name, email: userData.email, password: hashedPassword, gender: userData.gender, dob: userData.dob, nationality: userData.nationality, highest_qualifications: userData.highest_qualifications, phone: userData.phone, city: userData.city, sponsor_name: userData.sponsor_name, sponsor_email: userData.sponsor_email, sponsor_phone: userData.sponsor_phone };
    await this.users.create(createUserData)
    return createUserData;
  }

  public async updateUser(userId: number, userData: CreateStudentDto): Promise<StudentInt[]> {
    // AdminMap(LocalDB);
    if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

    const findUser: StudentInt[] = await this.users.findAll({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    const hashedPassword = await hash(userData.password, 10);
    const updateUserData: StudentInt[] = await findUser.map((user: StudentInt) => {
      // if (user.id === userId) user = { first_name: userData.first_name, last_name: userData.last_name, email: userData.email, password: hashedPassword, gender: userData.gender, dob: userData.dob, nationality: userData.nationality, highest_qualifications: userData.highest_qualifications, phone: userData.phone, city: userData.city, sponsor_name: userData.sponsor_name, sponsor_email: userData.sponsor_email, sponsor_phone: userData.sponsor_phone };
      return user;
    });

    return updateUserData;
  }

  public async deleteUser(userId: number): Promise<StudentInt[]> {
    // AdminMap(LocalDB)
    const findUser: StudentInt = await this.users.findOne({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "User doesn't exist");


    const deleteUserData: StudentInt[] = (await this.findAllUser())
    // .filter(user => user.id !== findUser.id)
    return deleteUserData;
  }
}

export default StudentService;
