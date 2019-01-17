

// Require in the friends data
const friendData = require('../data/friends');

// Set up the routes

module.exports = (app) => {

    app.get('/api/friends', (req, res)=>{
        res.json(friendsData);
    });

    app.post('/api/friends', (req, res)=>{
        let 
    });

}