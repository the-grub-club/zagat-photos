const fs = require('fs');
const casual = require('casual');

let writer = fs.createWriteStream('out-restaurants.csv', { flags: 'a' });

const createRestaurant = (res_id) => {
  const restaurantName = casual.word;
  return `${res_id},${restaurantName}\n`;
};

writer.write("res_id,restaurantName\n");

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

createBulk(0, 100);
