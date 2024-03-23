const Administrator = require("../models/administrator");

exports.getAllAdministrators = async (req, res) => {
    try {
        const allAdministrators = await Administrator.findAll();
        return res.status(200).json(allAdministrators);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving administrators', status: 500});
    }
}

exports.getAdministratorById = async (req, res) => {
    try {
        const administrator = await Administrator.findByPk(req.params.id);
        return res.status(200).json(administrator);
    } catch (error) {
        return res.status(500).send({error: 'Error retrieving administrator', status: 500});
    }
}

exports.register =  async (req, res) => {
    const {username, password} = req.body;
    try {
        const administrator = await Administrator.create({username, password});
        await administrator.save();
        return res.status(201).send({message: 'Administrator created', status: 201});
    } catch (error) {
        return res.status(500).send({error: 'Error creating administrator', status: 500});
    }
}

exports.login = async (req, res) => {

}

exports.logout = async (req, res) => {
    
}