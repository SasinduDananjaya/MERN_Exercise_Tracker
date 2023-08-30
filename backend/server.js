const express = require('express');
const cors = require('cors');


const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());            //cors middleware
app.use(express.json());    //Allow us to pass json. Server send and receive json

//Connect to the database
const uri = process.env.MONGO_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


//tell server find and to use the routes files
const exercisesRouter = require('./routes/exercises');
const usersRouter = require('./routes/users');

app.use('/exercises', exercisesRouter);
app.use('/users', usersRouter);


app.listen(port, ()=>{         //Start tbe server
    console.log(`Server is running on port: ${port}`);
});
