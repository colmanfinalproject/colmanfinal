const express = require('express');
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const cors = require('cors');
const items = require('./routes/item');
const bodyParser = require('body-parser');


dotenv.config();


mongoose.connect(
  'mongodb+srv://colmanfinalproject2022:colman123123@cluster0.skmm7gb.mongodb.net/?retryWrites=true&w=majority', 
  {
      useNewUrlParser: true,
      useUnifiedTopology: true
  }
);

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.use(bodyParser.urlencoded({extended:true, limit: '1mb'}));
app.use(bodyParser.json());
app.use('/items', items);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(5000, function () {
  console.log('App listening on port 5000!');
});