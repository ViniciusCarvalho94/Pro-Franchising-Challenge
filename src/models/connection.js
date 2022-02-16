const { MongoClient } = require('mongodb');

const MONGODB_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const MONGODB_URL = 'mongodb://localhost:27017/Bank';
const DB_NAME = 'Bank';

let db = null;

module.exports = async () => (db
  ? Promise.resolve(db)
  : MongoClient.connect(MONGODB_URL, MONGODB_OPTIONS)
    .then((conn) => {
      db = conn.db(DB_NAME);
      return db;
    })
);
