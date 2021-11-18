import fs from 'fs';
import csv from 'csvtojson';

const filePath = './nodejs-hw1-ex1.csv';

const readableStream = fs.createReadStream(filePath, 'utf-8');
const writableStream = fs.createWriteStream('outputFile.txt');

readableStream
  .pipe(csv())
  .pipe(writableStream)
  .on('error', (error) => {
    console.error(error.message);
    process.exit(1);
  });
