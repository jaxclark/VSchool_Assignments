const express = require("express");
const app = express();
require("dotenv").config()
const morgan = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;
const expressJwt = require("express-jwt")

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use("/api", expressJwt({secret: process.env.SECRET}))

app.use("/auth", require("./routes/auth"))
app.use("/api/todo", require("./routes/todo"));

app.use((err, req, res, next) => {
    console.error(err);
    if (err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({ message: err.message });
});

//connect to db
mongoose.set('useCreateIndex', true);
mongoose.connect("mongodb://localhost:27017/todo-auth-example",
    { useNewUrlParser: true },
    (err) => {
        if (err) throw err;
        console.log("Connected to the database");
    }
);

app.listen(PORT, () => {
    console.log(`[+] Starting server on port ${PORT}`);
});
