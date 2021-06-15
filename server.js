require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const routes = require('./routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride)



app.use('/user', routes.user);




app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}`);
})
