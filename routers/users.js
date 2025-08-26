const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();
const {getUsers, getUser, createUser, deleteUser, updateUser} = require('../controllers/users');
var urlencodedParses = bodyParser.urlencoded({extended: false});

// GET /users
router.get('/', getUsers);

// GET /users/:id
router.get('/:id', getUser);

// POST /users
router.post('/', createUser);

// POST /users/create
router.post('/create', urlencodedParses, createUser);

// DELETE /users/:id
router.delete('/:id', deleteUser);

// GET /users/:id/delete
router.get('/:id/delete', deleteUser);

// PATCH /users
router.patch('/:id', updateUser);

// POST /users/:id/update
router.post('/:id/update', urlencodedParses, updateUser);

module.exports = router;