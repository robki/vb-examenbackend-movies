module.exports = {
    HOST: 'http://localhost',
    PORT: 3000,
    MONGODBURL: process.env.MONGO_URI || 'mongodb://localhost/MovieDB'
    //andere:'mongodb://username:password@localhost/usersDB?options...');
};