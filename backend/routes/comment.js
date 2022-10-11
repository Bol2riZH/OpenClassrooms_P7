'use strict';

const express = require('express');
const router = express.Router();

const commentCtrl = require('../controllers/comment');

const auth = require('../middlewares/auth');

router.post('/:postId', auth, commentCtrl.addComment);
router.get('/', commentCtrl.getPostComments);

router.delete('/:id', auth, commentCtrl.deleteComment);

module.exports = router;
