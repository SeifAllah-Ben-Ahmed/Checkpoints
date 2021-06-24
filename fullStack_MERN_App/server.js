const connectDB = require("./config/connectDB");
const express = require("express");
const app = express();
if (process.env.NODE_ENV === "production") {
    //set static folder
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
} else {
    require("dotenv").config();
}
// const createCheckoutSession = require("./controllers/checkout");
const path = require("path");

const PORT = process.env.PORT;
connectDB(); //connect to mongoDB

app.use(express.json());

//routes
app.use("/api/user", require("./routes/user"));
app.use("/api/product", require("./routes/product"));
app.use("/api/article", require("./routes/article"));
app.use("/api", require("./routes/payment"));

// app.post("/api", createCheckoutSession);

app.listen(PORT, () =>
    console.log(`server is running on : http://localhost:${PORT}`)
);
