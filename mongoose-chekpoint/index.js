const mongoose = require("mongoose");

//connection
mongoose.connect(
    "mongodb://127.0.0.1:27017/checkpoint",
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(`db connecting ...`)
);

let PersonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,

    favoriteFoods: [String],
});
let person = mongoose.model("person", PersonSchema);

person.create(
    [
        { name: "seif", age: 25, favoriteFoods: ["pizza", "burritos"] },
        {
            name: "senda",
            age: 22,
            favoriteFoods: ["pizza", "makloub", "burritos"],
        },
        { name: "sirin", age: 14, favoriteFoods: ["makloub", "burritos"] },
        { name: "marry", age: 14, favoriteFoods: ["makloub", "burritos"] },
    ],
    function (err, data) {
        if (err) return handleError(err);
        // saved!
        // console.log(data);
    }
);
const find = person.find();
const findById = person.findById(
    "608cb1a5152e0232e0c763ff",
    function (err, data) {
        if (err) return handleError(err);
        // console.log(data);
    }
);

findById.update({ $set: { name: "seif allah" } }, (err, updated) => {
    if (err) console.log("can not update");
});
person.findOneAndUpdate({ name: "sirin" }, { name: "sirine" }, (err, data) => {
    if (err) console.log(err);
    // console.log(data);
});
person.findByIdAndRemove("608cbb64c6c3e61964792a9e", (err, data) => {
    if (err) console.log(err);
    // console.log(data);
});
person.remove({ name: "marry" });

person
    .find({ favoriteFoods: "burritos" })
    .sort({ name: 1 })
    .limit(2)
    .select("-age")
    .exec((err, data) => {
        if (err) console.log(err);
        console.log(data);
    });
