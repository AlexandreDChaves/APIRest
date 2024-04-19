const express = require('express');
const UserController = require('./controllers/user.controller');

const router = express.Router();

router.post('/', UserController.insert);
router.get('/', UserController.get);
router.get('/:userId', UserController.getById);
router.put('/:userId', UserController.update);
router.delete('/:userId', UserController.delete);

module.exports = router;