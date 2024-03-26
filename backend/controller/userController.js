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
    //
    const token = generateAccessToken({username: req.body.username});
    res.json(token);
    //
}

exports.login = async (req, res) => {

}

exports.logout = async (req, res) => {
    
}