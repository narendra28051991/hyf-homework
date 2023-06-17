const express = require("express");
const dbController = require("./controllers/dbController")

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

app.get('/', dbController.default_get);
app.get('/search', dbController.search_get);
app.get('/documents', (req, res) => res.redirect('/'))
app.get('/documents/:id', dbController.document_each);
app.post('/search', dbController.search_post);

app.use((req, res) => {
    res.status(404).send('OOPS! No Page Found');
});