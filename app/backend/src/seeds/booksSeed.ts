
import * as mongoose from 'mongoose';
import 'dotenv/config';

const MONGO_DB_URL = 'mongodb://root:123456@db';

mongoose.connect(MONGO_DB_URL)
  .then(() => console.log('MONGO CONNECTION OPEN!')
  );

