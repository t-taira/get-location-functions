const functions = require('firebase-functions');

exports.getLocation = functions.https.onRequest((req, res) => {
    var latlng = req.get("x-appengine-citylatlong");
    res.send(latlng);
});
