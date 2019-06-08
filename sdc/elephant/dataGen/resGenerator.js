const fs = require('fs');
const casual = require('casual');

let writer = fs.createWriteStream('out-restaurants.csv', { flags: 'a' });

const createRestaurant = (resId) => {
  const resName = casual.word;
  return `${resId},${resName}\n`;
};

writer.write('id,resName\n');

let amount = 10000000;

const createBulk = (start, end) => {
  writer = fs.createWriteStream('out-restaurants.csv', { flags: 'a' });

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
      const stringData = createRestaurant(j);
      ok = writer.write(stringData);
      j += 1;
    }
    while (j < end && ok);
    if (j < end) {
      writer.once('drain', handler);
    }
  }
};

createBulk(0, amount);
