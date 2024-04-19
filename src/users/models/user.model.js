const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    permissionLevel: { type: Number, required: true },
});

const UserModel = mongoose.model('User', userSchema);
module.exports = UserModel;

//Esse código define o esquema de dados para o modelo de usuário utilizando o Mongoose. O modelo de usuário é exportado para que possamos utilizá-lo em outros arquivos do nosso projeto.