require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
// const methodOverride = require('method-override');
const cors = require('cors');
const app = express();
const routes = require('./routes');
const constants = require('./constants');


const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
    optionsSuccessStatus: 200
  }

app.use(cors(corsOptions))
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride)



app.use('/user', routes.user);

app.listen(process.env.PORT, () => {
    console.log(`I am listening on port ${process.env.PORT}`);
})
