import { hash } from 'bcrypt';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { User } from '@interfaces/users.interface';
import AdminModel, { AdminMap} from '@models/admins.model';
import {LocalDB} from '../Database'
import { isEmpty } from '@utils/util';

class UserService {
  public users = AdminModel;

  public async findAllUser(): Promise<User[]> {
    AdminMap(LocalDB);
    const users: User[] = await this.users.findAll();
    return users;
  }

  public async findUserById(userId: number): Promise<User> {
    AdminMap(LocalDB);
    const findUser: User = await this.users.findOne({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "User doesn't exist");
    console.log(findUser);
    
    return findUser;
  }

  public async createUser(userData: CreateUserDto): Promise<User> {
    AdminMap(LocalDB);
    
    
    if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

    const findUser: User = await this.users.findOne({
      where: {
        email: userData.email,
      },
    });
    
    if (findUser) throw new HttpException(409, `This email ${userData.email} already exists`);

    const hashedPassword = await hash(userData.password, 10);
    const createUserData: {
        email: string;
        name: string;
        password: string;
    } = { name: userData.name, email: userData.email, password: hashedPassword };
    await this.users.create(createUserData)
    return createUserData;
  }

  public async updateUser(userId: number, userData: CreateUserDto): Promise<User[]> {
    AdminMap(LocalDB);
    if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

    const findUser: User = await this.users.findOne({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    const hashedPassword = await hash(userData.password, 10);
    const updateUserData: User[] = await this.users.map((user: User) => {
      if (user.id === findUser.id) user = { id: userId, ...userData, password: hashedPassword };
      return user;
    });

    return updateUserData;
  }

  public async deleteUser(userId: number): Promise<User[]> {
    AdminMap(LocalDB)
    const findUser: User = await this.users.findOne({where:{id: userId}});
    if (!findUser) throw new HttpException(409, "User doesn't exist");


    const deleteUserData: User[] = (await this.findAllUser()).filter(user => user.id !== findUser.id)
    return deleteUserData;
  }
}

export default UserService;
