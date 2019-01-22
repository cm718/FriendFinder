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
        console.log('friend post data',req.body);
        // Declare a variable for our best match
        let bestMatch = {
            "name": "",
            "photo": "",
            "difference": Infinity
        };

        // Declare variables to hold the user data from POST req
        let userData = req.body;
        friendsData.push(userData);
        let userScores = userData.scores;
        // Declare variable to hold difference between user score and each other user
        let totalDifference;

        // Loop through the other friends' data
        for (let i = 0; i < friendsData.length; i++) {
            let thisFriend = friendsData[i];
            totalDifference = 0;

            // Loop through the scores of the friends in friends.js
            // Save the data to new variables
            for (let j = 0; j < thisFriend.scores.length; j++) {
                let userScore = userScores[j];
                let thisFriendScore = thisFriend.scores[j];

                // Calculate the absolute difference between the friend and user scores
                totalDifference += Math.abs(parseInt(userScore) - parseInt(thisFriendScore));
            }
            // If the total difference is smaller than the current best match then update to become the best match.
            if (totalDifference <= bestMatch.difference) {
                bestMatch.name = thisFriend.name;
                bestMatch.photo = thisFriend.photo;
                bestMatch.difference = totalDifference;
            }
        }

        // Push in new data from the user
        friendsData.push(userData);

        // Return of JSON of bestMatch data
        res.json(bestMatch);
    });
};