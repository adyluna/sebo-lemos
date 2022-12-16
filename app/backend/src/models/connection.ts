
import * as mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URL = 'mongodb://root:123456@db';

const connectToDatabase = (
  mongoDatabaseURI = process.env.MONGO_URI
    || MONGO_DB_URL,
) => mongoose.connect(mongoDatabaseURI);

export default connectToDatabase;