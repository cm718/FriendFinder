

// Require in the friends data
let friendsData = require('../data/friends');

// Export the routes for other docs
module.exports = (app) => {
    // GET route for api/friends
    app.get('/api/friends', (req, res)=>{
        res.json(friendsData);
    });
    // POST route to update with new data
    app.post("/api/friends", (req, res) => {
        // Push in new data from the request body
        friendsData.push(req.body);
        // Response of friendsData
        res.json(friendsData);
      });
};