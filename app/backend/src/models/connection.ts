
import * as mongoose from 'mongoose';

const MONGO_DB_URL = 'mongodb://root:123456@db';
const options = {
  dbName: 'sebo'
};

const connectToDatabase = () => mongoose.connect(MONGO_DB_URL, options);

export default connectToDatabase;