import fs from 'fs';
import csv from 'csvtojson';

type Book = {
  Book: string;
  Author: string;
  Amount: string;
  Price: string;
};

const filePath = './hw1-ex1.csv';

const readableStream = fs.createReadStream(filePath, 'utf-8');
const writableStream = fs.createWriteStream('outputFile.txt');

const addToDB = (data: Book): void => {
  new Promise((resolve) => {
    console.log(data);
    setTimeout(() => resolve(data), 1000);
  });
};

readableStream
  .pipe(csv())
  .subscribe(addToDB)
  .pipe(writableStream)
  .on('error', (error) => {
    console.error(error.message);
    process.exit(1);
  });
