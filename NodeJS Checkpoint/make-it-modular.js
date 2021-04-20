const myModule = require("./mymodule.js");
const fileUrl = process.argv[2];
const extention = process.argv[3];

myModule(fileUrl, extention, (err, filter) => {
    if (err) return console.error(err);
    filter.forEach((e) => console.log(e));
});
