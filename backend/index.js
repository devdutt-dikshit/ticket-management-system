const express = require('express')
const app = express()
const port = 3001;
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors')

const Routes = require('./routes/routes')


app.use(express.json());
app.use(cors())

dotenv.config()

//connect to db 
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true, useUnifiedTopology: true }, () => { console.log('DB connected') })



app.use('/', Routes);


app.listen(port, () => {
  console.log(`listening ${port}`)
})