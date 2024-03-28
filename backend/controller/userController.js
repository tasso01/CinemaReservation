const User = require("../models/user");
const {generateAccessToken} = require('../authentication/jwt');
const {hashPassword, comparePasswords} = require('../authentication/hash');

exports.getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.findAll();
        return res.status(200).json(allUsers);
    } catch (error) {
        return res.status(500).send({message: 'Error returning users'});
    }
}

exports.getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).send({message: 'Error returning user'});
    }
}

exports.register =  async (req, res) => {
    const {username, password} = req.body;
    const hashedPassword = await hashPassword(password);
    try {
        const existingUser = await User.findOne({where: {username: username}})
        if (existingUser)
            return res.status(400).json({message: "Username already used"})
        const newUser = await User.create({username, password: hashedPassword});
        await newUser.save();
        const token = generateAccessToken({username: username});
        res.status(201).json(token);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

exports.login = async (req, res) => {
    const {username, password} = req.body;
    try {
        const existingUser = await User.findOne({where: {username: username}})
        if (!existingUser)
            return res.status(401).json({message: "Invalid username or password"})
        const validPassword = await comparePasswords(password, existingUser.password);
        if (!validPassword)
            return res.status(401).json({message: "Invalid username or password"})
        const token = generateAccessToken({username: username});
        res.status(201).json(token);
    } catch (error) {
        console.log(error);
        res.status(500);
    }
}

exports.logout = async (req, res) => {
    
}

exports.getIdByUsername = async (username) => {
    const user = await User.findOne({where: {username: username}});
    return user.id;
}