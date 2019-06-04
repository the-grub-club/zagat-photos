const mongoose = require('mongoose');

process.env.MONGO_URI = 'mongodb://localhost/restaurantphotos';
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);

const { Schema } = mongoose;
const photoSchema = new Schema({
  restaurantId: Number,
  name: String,
  photos: [String],
});

photoSchema.index({ restaurantId: 1 });

const Photo = mongoose.model('Photo', photoSchema);

// get a restaurant
const getPhotos = (id, callback) => {
  Photo.findOne({ restaurantId: id }).exec(callback);
};

// get all restaurants
const getRestaurants = (cb) => {
  Photo.find({}).exec(cb);
};

// post a restaurant
const postRestaurant = (id, cb) => {
  Photo.create({ restaurantId: id }).exec(cb);
};

// update a restaurant
const updateRestaurant = (id, cb) => {
  const query = { restaurantId: id };
  Photo.updateOne(query, { name: 'asgard' }).exec(cb);
};

// delete a restaurant
const deleteRestaurant = (id, cb) => {
  Photo.deleteOne({ restaurantId: id }).exec(cb);
};

const seedDatabase = async (records) => {
  await Photo.insertMany(records);
  await mongoose.connection.close();
  console.log('database seeded');
};

module.exports = {
  photoSchema,
  getPhotos,
  seedDatabase,
  getRestaurants,
  postRestaurant,
  updateRestaurant,
  deleteRestaurant,
};
