const express = require('express');
const { v4: uuidv4 } = require('uuid');
const sequelize = require('../model');
const User = require('../User');
sequelize.sync().then(() =>{
console.log('Бд загрузилась')
});


const getUsers = async (req, res)=>{
    const users = await User.findAll();
    res.render('get_users',{users})
}

const createUser = async (req, res)=>{
    const user = {id: uuidv4(), ...req.body};
    await User.create(user)
    res.redirect('/users');
}

const deleteUser = async (req, res)=>{
    const req_id = req.params.id;
    await User.destroy({ where: {id: req_id}});
    res.redirect('/users');
}

const updateUser = async (req, res)=>{
    const req_id = req.params.id;
    const user = await User.findOne({
        where: {id: req_id}
    });
    user.username = req.body.username;
    user.email = req.body.email;
    await user.save();
    res.redirect('/users/' + req_id);
}

const getUser = async (req, res)=>{
    const req_id = req.params.id;
    const user = await User.findOne({
        where: {id: req_id}
    });
    res.render('get_user', {user})
}

module.exports = {getUsers, getUser, createUser, deleteUser, updateUser};

