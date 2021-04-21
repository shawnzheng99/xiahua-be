const mongoose = require('mongoose');



const connectUrl = process.env.MONGO_URL;
const connectDB = async () => {
    try{
        const conn = await mongoose.connect(connectUrl, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
        });

        console.log('DB CONNECTION OK: ', conn.connection.host)
    }catch(e) {
        console.error('connecting db failed: ', e.message || e)
    }
}

module.exports = connectDB