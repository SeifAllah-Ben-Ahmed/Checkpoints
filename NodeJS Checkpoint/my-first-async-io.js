//my-first-async-io.js
const fileUrl = process.argv[2];

const fs = require("fs");

fs.readFile(fileUrl, "utf8", (err, data) => {
    if (err) throw err;

    return console.log(data.match(/\n/g).length);
});
