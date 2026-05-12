//Functional-Based
// export const s3Uploader = {
//     upload: async (fileName: string) => {
//         //upload file to s3
//         //long logic
//         console.log(`Uploading ${fileName} to S3`);
//         return true;
//     }
// }

//Class-Based
export class S3Uploader {

    constructor(private bucket: string) { }

    async upload(fileName: string) {
        console.log(`Uploading ${fileName} to S3 in bucket ${this.bucket}`);
        return true;
    }
}