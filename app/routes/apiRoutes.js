// Require in the friends data
let friendsData = require('../data/friends');

// Export the routes for other docs
module.exports = (app) => {
    // GET route for api/friends
    app.get('/api/friends', (req, res) => {
        res.json(friendsData);
    });
    // POST route to update with new data
    app.post("/api/friends", (req, res) => {

        // Declare a variable for our best match
        let bestMatch = {
            "name": "",
            "photo": "",
            "difference": Infinity
        };

        // Declare variables to hold the user data from POST req
        let userData = req.body;
        let userScores = userData.scores;
        // Declare variable to hold difference between user score and each other user
        let totalDifference;

        // Loop through the other friends' data
        for (let i = 0; i < friendsData.length; i++) {
            let thisFriend = friendsData[i];
            totalDifference = 0;

            for (let j = 0; j < thisFriend.scores.length; j++) {
                let userScore = userScores[j];
                let thisFriendScore = thisFriend.scores[j];


                totalDifference += Math.abs(parseInt(userScore) - parseInt(thisFriendScore));
            }
        }

        // Push in new data from the request body
        friendsData.push(req.body);
        // Response of friendsData
        res.json(friendsData);
    });
};