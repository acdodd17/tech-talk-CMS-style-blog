const { Post } = require("../models");

const postData = [
    {
        title: 'Id anim dolor labore amet tempor.', 
        post_content: 'Minim nulla sint mollit occaecat labore fugiat sit sit velit adipisicing esse laboris. Nisi aliqua commodo Lorem commodo et adipisicing do duis eiusmod ullamco laboris adipisicing ipsum do. Veniam cupidatat proident esse qui commodo ut ut aliquip et laboris duis.', 
        user_id: 1
    }, 
    {
        title: 'Qui do eiusmod cillum adipisicing ex.', 
        post_content: 'Voluptate id aute esse aliquip duis. Proident dolore consequat commodo nostrud cillum anim sint sunt. Et ex id magna reprehenderit.', 
        user_id: 2
    }, 
    {
        title: 'Proident do consectetur incididunt veniam proident ex consequat in eiusmod amet anim anim sit.', 
        post_content: 'Sint deserunt nisi magna laborum. Consequat dolor anim irure sint eu aute adipisicing nulla enim fugiat officia esse. Irure culpa deserunt nostrud pariatur Lorem quis. Id exercitation commodo fugiat anim mollit Lorem est irure culpa nisi deserunt. Ipsum deserunt eiusmod magna fugiat. Et proident dolore officia anim qui.', 
        user_id: 5
    }, 
    {
        title: 'Elit sit pariatur dolore pariatur dolor.', 
        post_content: ' ', 
        user_id: 3
    }, 
    {
        title: 'Magna consequat proident in consectetur velit consequat minim aliqua sit laborum ad commodo fugiat. Ullamco nulla cillum culpa nostrud enim voluptate culpa consequat consequat deserunt duis irure. Amet magna laboris voluptate irure nisi exercitation mollit ipsum. Veniam occaecat nostrud id irure cillum. Lorem culpa consequat ad excepteur aliquip velit commodo enim in. Labore eiusmod ea in proident aliquip Lorem anim.', 
        post_content: ' ', 
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;