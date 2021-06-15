require('dotenv').config();

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride)

const routes = require('./routes');














app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}`);
})
