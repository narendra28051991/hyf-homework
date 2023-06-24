const knex = require("../models/db")

const contacts = async (req, res) => {
    let query = knex("*").from("contacts");

    if ("sort" in req.query && req.query.sort.includes("drop")) {
      const orderBy = req.query.sort.toString();
      if (orderBy.length > 0) {
        query = query.orderByRaw(orderBy);
      }
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