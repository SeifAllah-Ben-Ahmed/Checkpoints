const fileUrl = process.argv[2];

const fs = require("fs");
const lineCounter = (fileUrl) => {
    return fs
        .readFileSync(fileUrl)
        .toString()
        .match(/\n/g || "").length;
};
console.log(lineCounter(fileUrl));
