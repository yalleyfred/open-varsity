import { NextFunction, Response } from 'express';
import { RequestCreateCourse } from '@/interfaces/auth.interface';

const courseMiddleware = async (req: RequestCreateCourse, res: Response, next: NextFunction) => {
    try {
        if (!req.file) {
            console.log("No file received");
            //  res.send({
            //   success: false
            // });
        
          } else {
            console.log('file received');
            //  res.send({
            //   success: true
            // })
        }
    
        const result = await cloudniary.uploader.upload(req.file.path, {
            folder: "image",
            resource_type: "image"
        })
    }catch(error) {

    }
}