// This file will handle connection logic to the MongoDB database

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
<<<<<<< HEAD
mongoose.connect('mongodb+srv://kittu:kittu2001@cluster0.tpxzd.mongodb.net/ressdp?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {
=======
mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser: true }).then(() => {
>>>>>>> 84ef65cc20347f4f3fda13eed9f08d5c78919a79
    console.log("Connected to MongoDB successfully :)");
}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});

// To prevent deprectation warnings (from MongoDB native driver)
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);


module.exports = {
    mongoose
};