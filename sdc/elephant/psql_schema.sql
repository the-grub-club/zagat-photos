DROP DATABASE IF EXISTS restaurants_photos;

CREATE DATABASE restaurants_photos;

\c restaurants_photos;

CREATE TABLE restaurants (
  id SERIAL PRIMARY KEY UNIQUE,
  restaurantName VARCHAR(60) NOT NULL
);

CREATE TABLE photos (
  imgId SERIAL PRIMARY KEY UNIQUE,
  resId INTEGER NOT NULL,
  inResId INTEGER NOT NULL,
  imgUrl VARCHAR(60) NOT NULL,
  FOREIGN KEY (resId) REFERENCES restaurants (id) ON DELETE CASCADE
);

CREATE INDEX resid_idx ON photos(resid);

COPY photos(imgId,resId,inResId,imgUrl) 
FROM '../../../../home/ec2-user/out-photos.csv' DELIMITER ',' CSV HEADER;

-- COPY restaurants(id,restaurantName) 
-- FROM '/Users/wangguan/Documents/code/hackreactor/grub/zagat-photos-service/sdc/elephant/dataGen/out-restaurants.csv' DELIMITER ',' CSV HEADER;

-- COPY photos(imgId,resId,inResId,imgUrl) 
-- FROM '/Users/wangguan/Documents/code/hackreactor/grub/zagat-photos-service/sdc/elephant/dataGen/out-photos.csv' DELIMITER ',' CSV HEADER;


