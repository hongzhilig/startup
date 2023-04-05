const express = require('express');
const app = express();
const DB = require('./database.js');

// The service port. In production the application is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 5000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the applications static content
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// Get list of books
apiRouter.get('/allBooks', async (_req, res) => {
    const books = await DB.getCollection();
    res.send(books);
})

// Submit book
apiRouter.post('/book', async (req, res) => {
    DB.addBook(req.body);
    const books = await DB.getCollection();
    res.send(books);
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
    res.sendFile('index.html', {root: 'public'});
});
  
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});