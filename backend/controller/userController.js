const User = require("../models/user");

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
        const user = await User.create({username, password});
        await user.save();
        return res.status(201).send({message: 'User created', status: 201});
    } catch (error) {
        return res.status(500).send({error: 'Error creating user', status: 500});
    }
}

exports.login = async (req, res) => {

}

exports.logout = async (req, res) => {
    
}