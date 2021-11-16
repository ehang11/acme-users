const express = require('express');
const path = require('path');

const faker = require('faker');
const app = express();
//const morgan = require('morgan');
//app.get(morgan('dev));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use('/src', express.static(path.join(__dirname, 'src')));
app.get('/', (req, res)  => res.sendFile(path.join(__dirname, 'index.html')));
const port = process.env.port || 4000;

app.listen(port, ()=>console.log(`listening on port ${port}`));
//console.log(faker.helpers.userCard());