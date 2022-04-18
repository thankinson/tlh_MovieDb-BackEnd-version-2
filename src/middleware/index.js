const bcrypt = require("bcryptjs");
const  jwt  = require("jsonwebtoken");
const User = require("../user/userModel");

exports.hashPassword = async (req, res, next) => {
    try {
        req.body.password = await bcrypt.hash(req.body.password, 8);
        next();
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message})
    }
};

exports.decryptPassword = async (req, res, next) => {
    try {
        req.user = await User.findOne({ username: req.body.username });
        if (await bcrypt.compare(req.body.password, req.user.password)) {
            next();
        } else {
            throw new Error("incorect credentials");
        }
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    }
};

exports.checkToken = async (req, res, next) => {
    try {
        console.log(req.body)
        const decodedToken = await jwt.verify(
                    req.header("Authorization").replace("Bearer ", ""),
                 process.env.SECRET
             );
             console.log(decodedToken)
        req.user = await User.findById(decodedToken._id);
        console.log(req.user)
        if (req.user){
            next();
        } else {
            throw new Error("no user found")
        }    
    } catch (error) {
        console.log(error);
        res.status(500).send({err: error.message});
    }
};                        