const mongoose = require('mongoose')

const connectDB = async () => {
    const MONGO_DB = process.env.MONGO_DB;
    
    mongoose.connect(MONGO_DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
      
    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    });
}

module.exports = connectDB