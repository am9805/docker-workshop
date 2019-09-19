const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    config = require('./DB');
const businessRoute = require('./routes/business.routes');
mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => { console.log('Database is connected') },
    err => { console.log('Can not connect to the database' + err) }
);
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/business', businessRoute);
const port = process.env.PORT || 4000;
app.get('/', function (req, res) {
    console.log('Test app')
    res.json({ "hello": "world" });
});
const server = app.listen(port, function () {
    console.log('Listening on port ' + port);
});