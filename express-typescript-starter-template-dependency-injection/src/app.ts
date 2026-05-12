import express from 'express';
// import { fileController } from './file-controller';
import { S3Uploader } from './s3-uploader';
import { ClUploader } from './cloudinary';
import { FileController } from './file-controller';

const app = express();

//Function-based
// app.get('/file-upload', (req, res) => {
//     const uploaderStr = req.query.uploader;
//     if (uploaderStr === 's3') {
//         fileController.upload(req, res, { uploader: s3Uploader });
//         return;
//     } else if (uploaderStr === 'cloudinary') {
//         fileController.upload(req, res, { uploader: clUploader })
//     } else {
//         res.status(400).json({ message: "Invalid uploader" });
//         return;
//     }
// });

//Class-based
app.get('/file-upload', (req, res) => {
    const uploaderStr: string = req.query.uploader as string;
    if (uploaderStr === 's3') {
        const uploader = new S3Uploader('my-s3-bucket');
        new FileController(uploader).upload(req, res);
        return;
    } else if (uploaderStr === 'cloudinary') {
        const uploader = new ClUploader('my-clouinary-bucket');
        new FileController(uploader).upload(req, res);
    } else {
        res.status(400).json({ message: "Invalid uploader" });
        return;
    }
});


export default app;

//Tools used to manage Dependency injection. 
//inversifyJS - inversion of controller (Dependency injection is an implementation of inversion of control)
//awiix
//typedi 

//=>Topic to learn
//ioc container 