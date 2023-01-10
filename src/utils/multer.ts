import { HttpException } from "@/exceptions/HttpException";
import { request } from "http";
import multer from "multer";
import path from 'path';

module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        let ext = path.extname(file.originalname);
        if(ext !== ".mp4" && ext !== ".mkv" && ext !== ".jpg" && ext !== ".png") {
            cb(new HttpException("File type is not supported"), false);
            return;
        }
        cb(null, true)
    }
});