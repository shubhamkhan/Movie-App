// MongoDB Atlas connention
const mongoose = require('mongoose');

const connectdb = async () => {
    try {
        const DB = 'mongodb+srv://'+process.env.DB_ADMIN+':'+process.env.DB_PASSWORD+'@'+process.env.DB_SERVER+'/'+process.env.DB_NAME+'?retryWrites=true&w=majority';
        await mongoose.connect(DB, {
                useNewUrlParser: true,
                useUnifiedTopology: true, 
            }
        )
        console.log('MongoDB Atlas Connected... :)');
    }
    catch (err) {
        console.log("Database Connection Error :(");
    }
}

module.exports = connectdb;