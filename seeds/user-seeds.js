const { User } = require('../models');

const userData = [
    {
        username: 'dumbledorealbus', 
        email: 'albus.dumbledore@gmail.com', 
        password: 'lumos'
    }, 
    {
        username: 'hjpotter', 
        email: 'harry.potter@gmail.com', 
        password: 'expelliarmus'
    },
    {
        username: 'hermionejg', 
        email: 'hermione.granger@gmail.com', 
        password: 'alohamora'
    },
    {
        username: 'ronweasley', 
        email: 'weasley.ron@gmail.com', 
        password: 'wingardiumleviosa'
    },
    {
        username: 'snapes', 
        email: 'severus.snape@gmail.com', 
        password: 'vulnerasanentur'
    },
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;