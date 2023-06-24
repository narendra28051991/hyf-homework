const knex = require("../models/db")

const contacts = async (req, res) => {
    let query = knex("*").from("contacts");

    if ("sort" in req.query && req.query.sort.includes("drop")) {
      const requestedSort = req.query.sort;
      query = query.orderByRaw('?', [requestedSort]);
    }

    console.log("SQL", query.toSQL().sql);

    try {
      const data = await query;
      res.json({ data });
    }
    catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
}

module.exports = { contacts };