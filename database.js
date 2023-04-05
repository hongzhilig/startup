const {MongoClient} = require('mongodb');

const userName = process.env.MONGOUSER;
const password = process.env.MONGOPASSWORD;
const hostname = process.env.MONGOHOSTNAME;

if (!userName) {
  throw Error('Database not configured. Set environment variables');
}

const url = `mongodb+srv://${userName}:${password}@${hostname}`;

const client = new MongoClient(url);
const bookCollection = client.db('library').collection('books');

function addBook(book) {
  bookCollection.insertOne(book);
}

function getCollection() {
  const cursor = bookCollection.find();
  return cursor.toArray();
}

module.exports = {addBook, getCollection}
