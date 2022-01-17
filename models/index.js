const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

//User has many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});

//Post belongs to User
Post.belongsTo(User, {
    foreignKey: 'user_id', 
    onDelete: 'SET NULL'
});

//User has many comments
User.hasMany(Comment, {
    foreignKey: 'user_id', 
    onDelete: 'SET NULL'
});

//Comment belongs to User
Comment.belongsTo(User, {
    foreignKey: 'user_id', 
    onDelete: 'SET NULL'
});

//Post has many comments
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

//Comment belongs to Post
Comment.belongsTo(Post, {
    foreignKey: 'post_id', 
    onDelete: 'SET NULL'
});

module.exports = { User, Post, Comment };