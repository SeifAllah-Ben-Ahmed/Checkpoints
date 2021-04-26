const express = require("express");
const app = express();
const port = 3000;

//default template engine
app.set("view engine", "pug");
app.set("views", "./views");

//middel ware

app.use((req, res, next) => {
    const date = new Date();
    if (
        date.getDay() === 0 ||
        date.getDay() === 6 ||
        date.getHours >= 18 ||
        date.getHours <= 8
    ) {
        return res.render("error");
    }

    next();
});

// import routes
const routerContact = require("./Routes/contact");
const routerHome = require("./Routes/home");
const routerServices = require("./Routes/services");

app.use("/", routerHome);
app.use("/contact", routerContact);
app.use("/services", routerServices);

//middelware

app.listen(port, () => console.log(`server running on port ${port}...`));
