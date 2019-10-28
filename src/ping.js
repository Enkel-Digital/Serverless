const functions = require('firebase-functions');

exports.ping = functions.https.onRequest((req, res) => {
  res.json({ "status": 200 });
});