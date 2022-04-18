const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    movies: [{ tmdbId:{ type: String, unique: true, required: true },
               title:{ type: String, unique: true, required: true },
               poster: { type: String },
            }]
    

});

const User = mongoose.model("User", userSchema);
module.exports = User;
