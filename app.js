const express = require('express');
const path = require('path');
const app = express();
const indexRoutes = require('./routes/index');

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Use routing logic
app.use('/', indexRoutes);

// Listen on a port (e.g., 3000)
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

