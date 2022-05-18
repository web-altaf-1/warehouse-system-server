const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 5000 ;


// middleware 

app.use(cors());
app.use(express.json());





const uri = "mongodb+srv://dbCars1:4TgpwW4jAHu29MC4@cluster0.cer7g.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("items").collection("car");
    console.log('Warehouse Database Connected');
  });



app.get('/',(req,res)=>{
    res.send('Warehouse server ready')
})

app.listen(port,()=>{
    console.log('Listening the port', port);
})