// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); // For MongoDB
const cors = require('cors'); // For CORS
const dotenv = require('dotenv'); // For environment variables

// Load environment variables
dotenv.config();

// Create an instance of Express
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware setup
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Connect to MongoDB (if using MongoDB)
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Define routes for the portfolio
app.get('/', (req, res) => {
    res.send('Welcome to My Portfolio API!');
});

// Route to get project data
app.get('/api/projects', (req, res) => {
    // Here, you would typically fetch the project data from the database
    const projects = [
        { id: 1, name: 'Deep Fake Detection System', description: 'Ongoing project for deepfake detection.' },
        { id: 2, name: 'Slot Machine', description: 'A fun Python project simulating a slot machine.' },
        // Add more projects as needed
    ];
    res.json(projects);
});

// Route for blog posts (if applicable)
app.get('/api/blogs', (req, res) => {
    // Here, you would fetch blog posts from the database
    const blogs = [
        { id: 1, title: 'My First Blog Post', content: 'Content of the first blog post.' },
        // Add more blog posts as needed
    ];
    res.json(blogs);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
