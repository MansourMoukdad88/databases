var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {}, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};


//optimal solution;
// var models = require('../models');

// module.exports = {

//   messages: {
//     get: function (req, res) {
//       models.messages.get(function(err, results) {
//         if (err) { /* do something */ }
//         res.json(results);
//       });
//     },
//     post: function (req, res) {
//       var params = [req.body.message, req.body.username, req.body.roomname];
//       models.messages.post(params, function(err, results) {
//         if (err) { /* do something */ }
//         res.sendStatus(201);
//       });
//     }
//   },

//   users: {
//     get: function (req, res) {
//       models.users.get(function(err, results) {
//         if (err) { /* do something */ }
//         res.json(results);
//       });
//     },
//     post: function (req, res) {
//       var params = [req.body.username];
//       models.users.post(params, function(err, results) {
//         if (err) { /* do something */ }
//         res.sendStatus(201);
//       });
//     }
//   }
//   };