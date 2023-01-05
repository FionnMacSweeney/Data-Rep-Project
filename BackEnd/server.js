// This is a file that listens to requests on a port and performs certain actions on a database
const express = require('express')
const app = express()
const port = 4000
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const cors = require('cors');
app.use(cors());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


const mongoose = require('mongoose');
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.8taek.mongodb.net/?retryWrites=true&w=majority');
  
}

const gameSchema = new mongoose.Schema({
  title: String,
  art: String,
  info: String,
  publisher: String
});

const gameModel = mongoose.model('Games', gameSchema);

// The app.post route listens for a POST request to the '/api/games' route and creates a new game document in the database with the information from the request
app.post('/api/games',(req,res)=>{
  console.log(req.body);

  gameModel.create({
    title: req.body.title,
    art:req.body.art,
    info:req.body.info,
    publisher:req.body.publisher
  })
  
  res.send('Data Recieved');
})

// The app.get route listens for a GET request to the '/api/games' route and sends back a JSON object with all the game documents in the databas
app.get('/api/games', (req, res) => {
  gameModel.find((error, data)=>{
    res.json(data);
  })
})

// The app.get route listens for a GET request to the '/api/games/:id' route and sends back a JSON object with the game document that has the matching id.
app.get('/api/games/:id', (req, res)=>{
  console.log(req.params.id);
  gameModel.findById(req.params.id,(error,data)=>{
    res.json(data);
  })
})

// The app.put route listens for a PUT request to the '/api/games/:id' route and updates the game document with the matching id with the information from the request
app.put('/api/games/:id', (req, res)=>{
  console.log("Update: "+req.params.id);

  gameModel.findByIdAndUpdate(req.params.id, req.body, {new:true},
    (error,data)=>{
      res.send(data);
    })
})

// The app.delete route listens for a DELETE request to the '/api/games/:id' route and deletes the game document with the matching id.
app.delete('/api/games/:id',(req,res)=>{
  console.log("deleteing: "+req.params.id);

  //finds the document by its id and deletes it 
  gameModel.findByIdAndDelete({_id:req.params.id},(error,data)=>{
    //use call back function to send back infor after deletion
    res.send(data);
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


