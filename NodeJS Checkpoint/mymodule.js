//filtered-ls.js
const fs = require("fs");
const path = require("path");

module.exports = (fileUrl, extention, callback) => {
    extention = `.${extention}`;
    fs.readdir(fileUrl, (err, data) => {
        if (err) return callback(err);

        const filter = data.filter((e) => {
            return path.extname(e) === extention;
        });
        return callback(null, filter);
    });
};
