const { Comment } = require('../models');

const commentData = [
    {
        user_id: 4, 
        post_id: 1, 
        comment_text: 'Brilliant!'
    }, 
    {
        user_id: 3, 
        post_id: 2, 
        comment_text: "Honestly, am I the only person who's ever bothered to read 'Hogwarts: A History?'"
    },
    {
        user_id: 5, 
        post_id: 2, 
        comment_text: 'The mind is not a book, to be opened at will and examined at leisure.'
    },
    {
        user_id: 1, 
        post_id: 3, 
        comment_text: 'The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution.'
    },
    {
        user_id: 4, 
        post_id: 4, 
        comment_text: "You're a little scary sometimes, you know that? Brilliant ... but scary."
    },
    {
        user_id: 2, 
        post_id: 5, 
        comment_text: 'I solemnly swear I am up to no good!'
    },
    {
        user_id: 1, 
        post_id: 5, 
        comment_text: 'Words are, in my not-so-humble opinion, our most inexhaustible source of magic. Capable of both inflicting injury, and remedying it.'
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;