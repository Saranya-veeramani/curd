
require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const uri = process.env.DATABASE_URL
mongoose.connect(uri, { useNewUrlParser: true })
const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const studentsRouter = require('./routes/routes')
app.use('/routes', studentsRouter)

app.listen(3031, () => console.log('Server Started'))
