
// Require in the Path dependency
const path = require('path');

// Routing
module.exports = (app) => {
    // Get request to send the survey html to the browswer
    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });
    // Get request to send the home page html to the browswer
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

}