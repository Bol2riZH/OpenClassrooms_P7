'use strict';

const Post = require('../models/Post');

const moment = require('moment');
moment.locale('fr');

/* GET TIME IN FR FORMAT */
const postedTime = () => {
  const time = moment.now();
  return moment(time).format('LLLL');
};

exports.addPost = async (req, res) => {
  try {
    const post = new Post({
      userName: req.body.userName,
      title: req.body.title,
      post: req.body.post,
      date: postedTime(),
    });
    await post.save();
    return res.status(201).json({ message: 'Post added: ', post });
  } catch (e) {
    return res.status(400).json({ e });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    if (!posts) return res.status(404).json({ message: 'No post found' });
    else return res.status(200).json({ message: 'list of post: ', posts });
  } catch (e) {
    return res.status(400).json({ e });
  }
};

/*///////////////////////*/
/*TODO cannot find by id*/
/*/////////////////////*/
exports.getOnePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: 'No post found' });
    else return res.status(200).json({ message: 'post: ', post });
  } catch (e) {
    return res.status(500).json({ e });
  }
};

/*/////////////////////////////*/
/*TODO correct search by title*/
/*///////////////////////////*/
exports.searchPost = async (req, res) => {
  try {
    const post = await Post.find({
      $or: [{ userName: req.body.userName }, { title: req.body.title }],
    });
    if (post.length === 0)
      return res.status(404).json({ message: 'No post found' });
    else return res.status(200).json({ message: 'post: ', post });
  } catch (e) {
    return res.status(500).json({ e });
  }
};
