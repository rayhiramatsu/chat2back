//---------- Dependencies ----------//
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
const db = mongoose.connection;
require('dotenv').config();

//---------- Configuration ----------//
const app = express();
const PORT = process.env.PORT || 7777;
// const PORT = 7777;


//---------- Middleware ----------//
app.use(express.json());
app.use(cors());
// app.use(
//     session({
//         secret: process.env.SECRET,
//         resave: false,
//         saveUninitialized: false
//     })
// );

app.use((req, res, next)=>{
  console.log('//-------------------//');
  console.log('Hello! I am middleware! I run for ALL routes, and in between the req and res');
  next();
});

//---------- Database ----------//
const MONGODB_URI = process.env.MONGODB_URI

// connect to mongo
mongoose.connect(
    MONGODB_URI,
    // 'mongodb://localhost:27017/' + 'nani',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
        // useFindAndModify: false
    }
);



// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
db.on('disconnected', () => console.log('mongo disconnected'));

//---------- Controllers ----------//
const userController = require('./routes/user_controller.js');
app.use('/users', userController);

const messageController = require('./routes/message_controller.js');
app.use('/messages', messageController);

// const conversationController = require('./routes/conversation_controller.js');
// app.use('/conversations', conversationController);


//---------- Routes ----------//
// none! not here anyway

// test route
app.get('/', (req, res)=>{
  res.send('Hello Za Warudo');
});


//---------- Listener ----------//

app.listen(PORT, ()=>{
    console.log('🍀 Listening on port 🍀', PORT);
})
