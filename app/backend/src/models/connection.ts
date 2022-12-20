import * as mongoose from 'mongoose';
import 'dotenv/config';

const MONGOHOST = process.env.MONGOHOST;
const MONGOPASSWORD = process.env.MONGOPASSWORD;
const MONGOPORT = process.env.MONGOPORT;
const MONGOUSER = process.env.MONGOUSER;

// entrei!

const URL = `mongodb://${ MONGOUSER }:${ MONGOPASSWORD }@${ MONGOHOST }:${ MONGOPORT }`

const options = {
  dbName: 'sebo'
};

const connectToDatabase = () => mongoose.connect(URL, options);

export default connectToDatabase;