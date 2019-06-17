import fs from 'fs';
import Jimp = require('jimp');

// filterImageFromURL
// helper function to download, filter, and save the filtered image locally
// returns the absolute path to the local image
// INPUTS
//    inputURL: string - a publicly accessible url to an image file
// RETURNS
//    an absolute path to a filtered image locally saved file
export async function filterImageFromURL(inputURL: string): Promise<string>{
    return new Promise( async resolve => {
        const outpath = `${__dirname}/tmp/filtered.${Math.floor(Math.random() * 2000)}.jpg`;
        Jimp.read(inputURL).then(photo => {
            photo
            .resize(256, 256)
            .quality(60)
            .greyscale()
            .write(outpath, (err, value, coords) => {
                resolve(outpath);
            })
        }).catch(err => {           
            resolve(err);
        })
    });
}

// deleteLocalFiles
// helper function to delete files on the local disk
// useful to cleanup after tasks
// INPUTS
//    files: Array<string> an array of absolute paths to files
export async function deleteLocalFiles(files:Array<string>){
    for( let file of files) {
        fs.unlinkSync(file);
    }
}