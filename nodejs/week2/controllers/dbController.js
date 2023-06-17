const db = require('../db/db.json');

const default_get = (req, res) => {
    res.json(db);
}

const search_get = (req, res) => {
    const query = req.query.q;
    if (query) {
        const result = db.filter(object => {
            const values = Object.values(object);
            return values.some(each => {
                const value = each.toString();
                return typeof value === 'string' && value.includes(query);
            });
        });
        result.length > 0 ? res.json(result) : res.status(404).send('No data found for the query');
    }
    else {
        res.redirect('/');
    }
}

const search_post = (req, res) => {
    const query = req.query.q;
    const fields = req.body;
    const length = Object.keys(fields).length;

    if (query && length !== 0) {
        res.status(404).send("Both query parameter and fields in the body can't be provided.")
    }
    else if (query) {
        res.redirect('/search?q=' + query);
    }
    else if (length !== 0) {
        const result = db.filter((object) => {
            return Object.entries(fields).every(([key, value]) => {
              return object[key] === value;
            });
        });
        result.length > 0 ? res.json(result) : res.status(404).send('No data found for the entered field');
    }
    else {
        res.redirect('/');
    }
}

const document_each = (req, res) => {
    const id = req.params.id;
    const result = db.filter(each => id === each.id.toString());
    result.length > 0 ? res.json(result) : res.status(404).send('No data found for the given id');
}

module.exports = {
    default_get,
    search_get,
    search_post,
    document_each
}