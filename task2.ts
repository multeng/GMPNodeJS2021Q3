import fs from 'fs';
import csv from 'csvtojson';


type Book = {
  Book: string,
  Author: string,
  Amount: string,
  Price: string
}

const filePath = './hw1-ex1.csv';

const readableStream = fs.createReadStream(filePath, 'utf-8');
const writableStream = fs.createWriteStream('outputFile.txt');

const addToDB = (data: Book) => {
  new Promise ((resolve) => {
    setTimeout(() => resolve(data), 1000)
  })
}

readableStream
  .pipe(csv())
  .subscribe((data: Book) => addToDB(data))
  .pipe(writableStream)
  .on('error', (error) => {
    console.error(error.message);
    process.exit(1);
  });
