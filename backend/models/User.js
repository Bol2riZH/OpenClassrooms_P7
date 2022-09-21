'use strict';

const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  profilPictureUrl: { type: String, default: 'empty' },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
