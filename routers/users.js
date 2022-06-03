const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const {getUsers, getUser, createUser, deleteUser, updateUser} = require('../controllers/users');
var urlencodedParses = bodyParser.urlencoded({extended: false});

// GET localhost:5000/users
router.get('/', getUsers);

// GET localhost:5000/users/:id
router.get('/:id', getUser);

// POST localhost:5000/users
router.post('/', createUser);

// POST localhost:5000/users/create
router.post('/create', urlencodedParses, createUser);

// DELETE localhost:5000/users/:id
router.delete('/:id', deleteUser);

// GET localhost:5000/users/:id/delete
router.get('/:id/delete', deleteUser);

// PATCH localhost:5000/users
router.patch('/:id', updateUser);

// POST localhost:5000/users/:id/update
router.post('/:id/update', urlencodedParses, updateUser);

module.exports = router;