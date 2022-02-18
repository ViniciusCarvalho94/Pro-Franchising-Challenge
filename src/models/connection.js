require('dotenv').config();

const { MongoClient } = require('mongodb');

const MONGODB_OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const { MONGODB_URL, DB_NAME } = process.env;

let db = null;

module.exports = async () => (db
  ? Promise.resolve(db)
  : MongoClient.connect(MONGODB_URL, MONGODB_OPTIONS)
    .then((conn) => {
      db = conn.db(DB_NAME);
      return db;
    })
);
