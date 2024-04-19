const UserModel = require('../models/user.model');

// Método para inserir um usuário
exports.insert = async (req, res) => {
    try {
        const user = new UserModel(req.body);
        const result = await user.save();
        res.status(201).json(result);
    } catch (err) {
        res.status(400).json({ message: 'Error saving user', error: err });
    }
};

// Método para listar todos os usuários
exports.get = async (req, res) => {
    try {
        const result = await UserModel.find({});
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: 'Error fetching users', error: err });
    }
};

// Método para buscar um usuário por ID
exports.getById = async (req, res) => {
    try {
        const result = await UserModel.findById(req.params.userId);
        if (!result) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(result);
        }
    } catch (err) {
        res.status(400).json({ message: 'Error fetching user', error: err });
    }
};

// Método para atualizar um usuário por ID
exports.update = async (req, res) => {
    try {
        const result = await UserModel.findByIdAndUpdate(
            req.params.userId,
            req.body,
            { new: true }  // Retorna o objeto atualizado
        );
        if (!result) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json(result);
        }
    } catch (err) {
        res.status(400).json({ message: 'Error updating user', error: err });
    }
};

// Método para deletar um usuário por ID
exports.delete = async (req, res) => {
    try {
        const result = await UserModel.findByIdAndDelete(req.params.userId);
        if (!result) {
            res.status(404).json({ message: 'User not found' });
        } else {
            res.status(200).json({ message: 'User deleted successfully' });
        }
    } catch (err) {
        res.status(400).json({ message: 'Error deleting user', error: err });
    }
};


//Esse código define os controladores para as operações CRUD relacionadas ao módulo
// de usuário. Cada controlador é responsável por lidar com uma operação específica, 
//como inserir um novo usuário, obter todos os usuários, obter um usuário pelo ID,
// atualizar um usuário e deletar um usuário.