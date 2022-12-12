import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { CreateUserDto, LoginUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, TokenData } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import AdminModel, { AdminMap} from '@models/admins.model';
import {LocalDB} from '../Database'
import { isEmpty } from '@utils/util';

class AdminAuthService {
  public users = AdminModel;

  public async signup(userData: CreateUserDto): Promise<User> {
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
    }
    = { name: userData.name, email: userData.email, password: hashedPassword };
    await this.users.create(createUserData)

    return createUserData;
  }

  public async login(userData: LoginUserDto): Promise<{ cookie: string, findUser: User }> {
    AdminMap(LocalDB);
    if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

    const findUser: User = await this.users.findOne({
      where: {
        email: userData.email,
      },
    });


    
    if (!findUser) throw new HttpException(409, `This email ${userData.email} was not found`);

    const isPasswordMatching: boolean = await compare(userData.password, findUser.password);
    if (!isPasswordMatching) throw new HttpException(409, "You're password not matching");

    const tokenData = this.createToken(findUser.id);
    const cookie = this.createCookie(tokenData);
    
    return { cookie, findUser };
  }

  public async logout(userData: User): Promise<User> {
    AdminMap(LocalDB);
    if (isEmpty(userData)) throw new HttpException(400, "userData is empty");

    const findUser: User = await this.users.findOne({
      where: {
        email: userData.email,
        password: userData.password
      },
    });
    if (!findUser) throw new HttpException(409, "User doesn't exist");

    return findUser;
  }

  public createToken(user: {id: number}): TokenData {
    const dataStoredInToken: DataStoredInToken = { id: user.id };
    const secretKey: string = SECRET_KEY;
    const expiresIn: number = 60 * 60;

    return { expiresIn, token: sign(dataStoredInToken, secretKey, { expiresIn }) };
  }

  public createCookie(tokenData: TokenData): string {
    return `Authorization=${tokenData.token}; HttpOnly; Max-Age=${tokenData.expiresIn};`;
  }
}

export default AdminAuthService;
