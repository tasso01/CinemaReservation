const User = require("../models/user");
const {generateAccessToken} = require('../authentication/jwt');
const { username } = require("../database/config");

exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.findAll();
        return res.status(200).json(allUsers);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving users', status: 500});
    }
}

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving user', status: 500});
    }
}

exports.register =  async (req, res) => {
    const {username, password} = req.body;
    try {
        const existingUser = User.findOne({where: {username: username}})
        if (existingUser !== null) {
            return res.status(400).json({message: "Username already used"})
        }
        const newUser = await User.create({username, password});
        await newUser.save();
        const token = generateAccessToken({username: req.body.username});
        res.status(201).json(token);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
    
}

exports.login = async (req, res) => {

}

exports.logout = async (req, res) => {
    
}