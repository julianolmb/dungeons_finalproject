/// importing the dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const {v4: uuidv4} = require('uuid');

const { User } = require('../models/user');
const { Quotes } = require('../models/quotes')
const { Recipes } = require('../models/recipes')
const { Tales } = require('../models/tales')
mongoose.connect('mongodb+srv://julianolmb:juliano123@cluster0.xgvdv.mongodb.net/Dungeons?retryWrites=true&w=majority');

// defining the Express app
const app = express();

// adding Helmet to enhance your API's security
app.use(helmet());

// using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

// enabling CORS for all requests
app.use(cors());

// adding morgan to log HTTP requests
app.use(morgan('combined'));


app.post('/auth', async (req,res) => {
  const user = await User.findOne({ username: req.body.username })
  console.log(req.body)
  if(!user) {
    return res.sendStatus(401);
  }
  if( req.body.password !== user.password ){
    return res.sendStatus(403)
  }

  user.token = uuidv4()
  await user.save()
  res.send({token: user.token})

})

app.use( async (req,res,next) => {
  const authHeader = req.headers['authorization']
  if (authHeader == "weliketoplaydungeonsanddragons" ) {
    next()
  }else {
    res.sendStatus(403);
  }
})

//CRUDE for Quotes

app.get('/quotes', async (req, res) => {
  res.send(await Quotes.find());
});

app.post('/quotes', async (req, res) => {
  const newQuotes = req.body;
  const quotes = new Quotes(newQuotes);
  await quotes.save();
  res.send({ message: 'New quote inserted.' });
});

app.delete('/quote/:id', async (req, res) => {
  await Quotes.deleteOne({ _id: ObjectId(req.params.id) })
  res.send({ message: 'quote removed.' });
});

app.put('/quote/:id', async (req, res) => {
  await Quotes.findOneAndUpdate({ _id: ObjectId(req.params.id)}, req.body )
  res.send({ message: 'quote updated.' });
});


//CRUDE for Recipes

app.get('/recipes', async (req, res) => {
  res.send(await Recipes.find());
});

app.post('/recipes', async (req, res) => {
  const newRecipes = req.body;
  const recipes = new Recipes(newRecipes);
  await recipes.save();
  res.send({ message: 'New recipe inserted.' });
});

app.delete('/recipe/:id', async (req, res) => {
  await Recipes.deleteOne({ _id: ObjectId(req.params.id) })
  res.send({ message: 'recipe removed.' });
});

app.put('/recipe/:id', async (req, res) => {
  await Recipes.findOneAndUpdate({ _id: ObjectId(req.params.id)}, req.body )
  res.send({ message: 'recipe updated.' });
});

//CRUDE for Tales

app.get('/tales', async (req, res) => {
  res.send(await Tales.find());
});

app.post('/tales', async (req, res) => {
  const newTales = req.body;
  const tales = new Tales(newTales);
  await tales.save();
  res.send({ message: 'New tale inserted.' });
});

app.delete('/tale/:id', async (req, res) => {
  await Tales.deleteOne({ _id: ObjectId(req.params.id) })
  res.send({ message: 'tale removed.' });
});

app.put('/tale/:id', async (req, res) => {
  await Tales.findOneAndUpdate({ _id: ObjectId(req.params.id)}, req.body )
  res.send({ message: 'tale updated.' });
});

//End of CRUDES

app.listen(3001, () => {
  console.log('listening on port 3001');
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback() {
  console.log("Database connected!")
});
