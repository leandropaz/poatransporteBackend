const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.error('Connection to database failed...', err);
    process.exit();
});

require('./app/routes/bus.routes')(app);

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});

