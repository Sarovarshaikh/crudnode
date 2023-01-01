import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-vl6sn0m-shard-00-00.8cxxt94.mongodb.net:27017,ac-vl6sn0m-shard-00-01.8cxxt94.mongodb.net:27017,ac-vl6sn0m-shard-00-02.8cxxt94.mongodb.net:27017/?ssl=true&replicaSet=atlas-rtzxwd-shard-0&authSource=admin&retryWrites=true&w=majority`

    try {
        // 1 - Current URL string parser is deprecated, and will be removed in a future version. 
        // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;