const router = require('express').Router();
const user = require('../controller/user');
const auth = require('../middleware/auth');

router.route('/')
.post(user.add)

router.route('/login')
.post(user.login);

module.exports = router;