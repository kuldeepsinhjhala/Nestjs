import { Request, Response } from "express";

interface Uploader {
    upload: (fileName: string) => Promise<boolean>;
};

//Function-based
// export const fileController = {
//     upload: async (req: Request, res: Response, { uploader }: { uploader: Uploader }) => {
//         await uploader.upload('test.mp4');
//         res.json({ message: 'Hello world!' });
//     }
// };

//class-based
export class FileController {

    //long syntax
    // private uploader: Uploader;
    // constructor(uploader: Uploader) {
    //     this.uploader = uploader;
    // }

    //short syntax
    constructor(private uploader: Uploader) { }

    async upload(req: Request, res: Response) {
        await this.uploader.upload('test.mp4');
        res.json({ message: 'Hello world!' });
    }
}