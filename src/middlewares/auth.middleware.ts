import { NextFunction, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { SECRET_KEY } from '@config';
import { HttpException } from '@exceptions/HttpException';
import { DataStoredInToken, RequestWithUser, RequestWithStudent } from '@interfaces/auth.interface';
import Student from '@/models/students.model';
import Admin from '@/models/admins.model';

const authMiddleware = async (req: RequestWithUser | RequestWithStudent, res: Response, next: NextFunction) => {
  try {
    const Authorization = req.cookies['Authorization'] || (req.header('Authorization') ? req.header('Authorization').split('Bearer ')[1] : null);
    
    if (Authorization) {
      const secretKey: string = SECRET_KEY;
      const verificationResponse = (await verify(Authorization, secretKey)) as DataStoredInToken;
      const userId = verificationResponse.id;
      const findUser = await Student.findOne({
        where: {
          id: userId
        }
      });
      const findAdmin = await Admin.findOne({
        where: {
          id: userId
        }
      });
      
      if (findUser || findAdmin) {
        req.user = findUser || findAdmin;
        next();
      } else {
        next(new HttpException(401, 'Wrong authentication token'));
      }
    } else {
      next(new HttpException(404, 'Authentication token missing'));
    }
  } catch (error) {
    next(new HttpException(401, 'Wrong authentication token'));
  }
};

export default authMiddleware;
