//Functional-Based
// export const clUploader = {
//     upload: async (fileName: string) => {
//         //upload file to cl
//         //long logic
//         console.log(`Uploading ${fileName} to cloudinary`);
//         return true;
//     }
// }

//Class-Based
export class ClUploader {

    constructor(private bucket: string) { }

    async upload(fileName: string) {
        console.log(`Uploading ${fileName} to cloudinary in bucker ${this.bucket}`);
        return true;
    }
}