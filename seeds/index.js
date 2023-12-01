const mongoose = require('mongoose');
const cities = require('./cities');
const { places, descriptors } = require('./seedHelpers');
const Campground = require('../models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const sample = array => array[Math.floor(Math.random() * array.length)];


const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
            author: '65690b91332909c5ab7d922f',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            geometry: {
                 type: 'Point', 
                 coordinates: [
                    cities[random1000].longitude,
                    cities[random1000].latitude
                 ] 
                },
            images: [
                {
                    url: 'https://res.cloudinary.com/db9tkquj5/image/upload/v1699410635/YelpCamp/cwznmdbmechjetniacbe.jpg',
                    filename: 'YelpCamp/cwznmdbmechjetniacbe',
                },
                {
                    url: 'https://res.cloudinary.com/db9tkquj5/image/upload/v1699410635/YelpCamp/valkizwtbqamj3b1wan8.jpg',
                    filename: 'YelpCamp/valkizwtbqamj3b1wan8',
                }
            ],
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})