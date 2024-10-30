const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();
const PORT = 5000;

mongoose.connect(process.env.MONGODB_DATABASE_URI);

app.use(cors());
app.use(express.json())

app.use('/', require('./routes/index.js'))

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`)
})