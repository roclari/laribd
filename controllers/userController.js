const user = require('../models/user');

exports.getUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await user.findById(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await user.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

exports.createUser = async (req, res) => {
    const user = new user(req.body);
    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

exports.updateUser = async (req, res) => {
    try {
        const updatedUser = await user.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await user.findByIdAndDelete(req.params.id);
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};
