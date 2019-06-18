DROP KEYSPACE IF EXISTS restaurants_photos;
CREATE KEYSPACE restaurants_photos WITH replication = {'class': 'SimpleStrategy', 'replication_factor' : '1'};

USE restaurants_photos;

CREATE TABLE photos (
  id INT PRIMARY KEY,
  resId INT,
  inResId INT,
  resName VARCHAR,
  imgUrl VARCHAR
);

CREATE INDEX photos_idx ON restaurants_photos(photos);
CREATE INDEX resname_idx ON restaurants_photos(photos);

COPY photos(id,resId,inResId,resName,imgUrl)
FROM '/Users/wangguan/Documents/code/hackreactor/grub/zagat-photos-service/sdc/cassandra/dataGen/out-cas.csv' WITH HEADER = TRUE; 