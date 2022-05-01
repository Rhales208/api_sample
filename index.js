const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send("hello world");
});//callback function also called a route handler

app.listen(3000, () => console.log('listening on port 3000...'))//then in terminal type node index.js and it should be listening.