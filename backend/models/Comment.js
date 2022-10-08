'use strict';

const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
  userId: { type: String, required: true },
  comment: { type: String, required: true },
  date: { type: String, required: true },
  postedTime: { type: String, required: true },
});

module.exports = mongoose.model('Comments', commentSchema);
