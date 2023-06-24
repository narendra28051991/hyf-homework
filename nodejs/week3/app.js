require("dotenv").config();
const express = require("express");
const contactsRouter = require("./routes/contactsRouter")

const app = express();
const port = process.env.APP_PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const apiRouter = express.Router();
app.use("/api", apiRouter);

apiRouter.use("/contacts", contactsRouter);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});