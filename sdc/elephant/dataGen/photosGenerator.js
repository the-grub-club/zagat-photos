const fs = require('fs');
const casual = require('casual');

let writer = fs.createWriteStream('out-photos.csv', { flags: 'a' });

const gallery = ['http://wang-guan.com/o/01.jpg',
  'http://wang-guan.com/o/02.jpg',
  'http://wang-guan.com/o/03.jpg',
  'http://wang-guan.com/o/04.jpg',
  'http://wang-guan.com/o/05.jpg',
  'http://wang-guan.com/o/06.jpg',
  'http://wang-guan.com/o/07.jpg',
  'http://wang-guan.com/o/08.jpg',
  'http://wang-guan.com/o/09.jpg',
  'http://wang-guan.com/o/10.jpg',
  'http://wang-guan.com/o/11.jpg',
  'http://wang-guan.com/o/12.jpg',
  'http://wang-guan.com/o/13.jpg',
  'http://wang-guan.com/o/14.jpg',
  'http://wang-guan.com/o/15.jpg',
  'http://wang-guan.com/o/16.jpg',
  'http://wang-guan.com/o/17.jpg',
  'http://wang-guan.com/o/18.jpg',
  'http://wang-guan.com/o/19.jpg',
  'http://wang-guan.com/o/20.jpg'];

let counter = 0;

writer.write("imgId,resId,inResId,imageUrl\n");

const createPhotos = (res) => {
  let outputStr = '';
  let picNum = casual.integer(from = 8, to = 16);
  for (let i = 0; i < picNum; i += 1) {
    let imgNum = casual.integer(from = 0, to = 19);
    outputStr += `${counter},${res},${i},${gallery[imgNum]}\n`;
    counter += 1;
  }
  return outputStr;
};

const createBulk = (start, end) => {
  writer = fs.createWriteStream('out-photos.csv', { flags: 'a' });

  console.log('lets go');

  let j = start;
  handler();
  function handler() {
    let ok = true;
    do {
      if (j % 100000 === 0) {
        const temp = j / 1000000;
        console.log(`hits ${temp} million`);
      }

      const stringData = createPhotos(j);
      ok = writer.write(stringData);
      j += 1;
    } while (j < end && ok);
    if (j < end) {
      writer.once('drain', handler);
    }
  }
};

createBulk(0, 100);
