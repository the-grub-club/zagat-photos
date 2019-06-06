const fs = require('fs');
const casual = require('casual');
// const faker = require('faker');

let writer = fs.createWriteStream('out.csv', { flags: 'a' });

const gallery = ['https://upload.wikimedia.org/wikipedia/commons/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg',
  'https://foodrevolution.org/wp-content/uploads/2018/03/blog-featured_healthy_foods-20180306.jpg',
  'https://www.gannett-cdn.com/-mm-/d45a1bc902cb3f4367b332e27f859c7252d4b7fa/c=0-109-2119-1306/local/-/media/2019/04/12/USATODAY/USATODAY/636906715367623091-GettyImages-1054857274.jpg?width=3200&height=1680&fit=crop',
  'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/article/2017/12/06/why-sugar-and-why-so-much-who-investigates-the-food-industry-s-sweet-tooth/7624387-1-eng-GB/Why-sugar-and-why-so-much-WHO-investigates-the-food-industry-s-sweet-tooth_wrbm_large.jpg',
  'https://img.sndimg.com/food/image/upload/w_560,h_315,c_fill,fl_progressive,q_80/v1/img/recipes/53/74/76/83kDuWs7QsCf4oZ0rhFs_0S9A7513.jpg',
  'https://assets3.thrillist.com/v1/image/2791598/size/tl-full_width_tall_mobile.jpg',
  'https://www.gannett-cdn.com/presto/2019/04/15/USAT/c3cdeebe-8275-47bb-8c73-81e9e3d37d6b-Beyond_Tacos.jpg?crop=5514,3102,x0,y361&width=3200&height=1680&fit=bounds',
  'https://www.bbcgoodfood.com/sites/default/files/guide/guide-image/2018/06/chicken-wings-main.jpg',
  'https://www.eatsamazing.co.uk/wp-content/uploads/2017/08/4-Fun-and-Easy-Sandwich-Ideas-Fun-Food-for-Kids-perfect-for-school-lunch-boxes-bento-boxes-and-party-food-too-Cute-Owl-Sandwich-Yumbox-UK-480x270.jpg',
  'https://media1.popsugar-assets.com/files/thumbor/uYUKBKVnVUIfEfFY6JGhlFiqeoY/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/02/09/795/n/24155406/cf2c45f5589caf46cc17f0.73358259_edit_img_image_35453537_1407866915/i/Disney-Food-Art-Ideas.jpg'];


const createOne = function (res_id, img_id) {
  let restaurantName = casual.word;
  let imgNum = casual.integer(from = 0, to = 9);
  return `${res_id},${img_id},${restaurantName},${gallery[imgNum]}\n`;
}

writer.write("res_id,img_id,restaurantName,imageUrl\n");


const createBulk = (start, end) => {
  writer = fs.createWriteStream('out.csv', { flags: 'a' });

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
      let picNum = casual.integer(from = 8, to = 16);
      for (let i = 0; i < picNum; i++) {
        const stringData = createOne(j, i);
        ok = writer.write(stringData);
      }
      j++;
    } while (j < end && ok);
    if (j < end) {
      writer.once('drain', handler);
    }
  }
};


createBulk(0, 10000000);
