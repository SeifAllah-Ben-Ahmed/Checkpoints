const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const User = require("./models/User");

const app = express();
app.use(bodyParser.json());
dotenv.config({ path: "./config/.env" });

//listening port
PORT = process.env.PORT;

app.listen(PORT, () =>
    console.log(`server running on http://localhost:${PORT}`)
);

//DB connection
const DB = process.env.DB;
mongoose.connect(
    DB,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    },
    () => console.log("DB connected ...")
);
//GET :  RETURN ALL USERS
app.get("/", async (req, res) => {
    const data = await User.find();
    try {
        await res.status(200).send(data);
    } catch (error) {
        res.status(404).json({
            success: false,
            error: error.message,
        });
    }
});

//POST :  ADD A NEW USER TO THE DATABASE
app.post("/", async (req, res) => {
    const { name, email, age } = req.body;

    try {
        const user = await User.create({
            name: name,
            email: email,
            age: age,
        });
        res.status(201).json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});
//PUT : EDIT A USER BY ID
app.put("/:_id", async (req, res) => {
    const { name, email, age } = req.body;

    try {
        const user = await User.findByIdAndUpdate(req.params._id, {
            $set: {
                name,
                email,
                age,
            },
        });
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            error: error.message,
        });
    }
});

// DELETE : REMOVE A USER BY ID
app.delete("/:_id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params._id);
        res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        res.status(404).json({
            success: false,
            error: error.message,
        });
    }
});
