const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//User has many posts

//Post belongs to User

//User has many comments

//Comment belongs to User

//Post has many comments

//Comment belongs to Post


module.exports = { User, Post, Comment };