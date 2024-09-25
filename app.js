const express = require('express');
const path = require('path');
const app = express();
const indexRoutes = require('./routes/index');


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRoutes);


app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

