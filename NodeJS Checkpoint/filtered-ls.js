//filtered-ls.js

const fs = require("fs");
const path = require("path");

const fileUrl = process.argv[2];
const extention = `.${process.argv[3]}`;

fs.readdir(fileUrl, (err, data) => {
    if (err) throw err;

    data.forEach((e) => {
        if (path.extname(e) === extention) {
            console.log(e);
        }
    });
});
