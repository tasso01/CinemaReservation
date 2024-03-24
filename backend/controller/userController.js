const User = require("../models/user");
const jwt = require('../middleware/jwt');

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
        console.log(error)
        return res.status(500).send({error: 'Error creating user', status: 500});
    }
}

exports.login = async (req, res) => {
    const {username, password} = req.body;
    const user = await User.findOne({where: {username: username}});
    if (user === null)
        return res.status(500).send({message: 'Invalid username', status: 500});
    const pass = await password === user.password;
    if(!pass)
        return res.status(500).send({message: 'Invalid password', status: 500});
    let token = jwt.setToken(1, username);
    let payload = jwt.getPayload(token);
    res.json({token: token, payload: payload});
}

exports.logout = async (req, res) => {
    
}

