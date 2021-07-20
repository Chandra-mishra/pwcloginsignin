const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    chartData : {
        type:Object
    }
});
module.exports = mongoose.model("Chart", userSchema);