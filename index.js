const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 
const cors = require('cors'); 
const dotenv = require('dotenv'); 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); 
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
    res.send('Welcome to My Portfolio API!');
});

app.get('/api/projects', (req, res) => {
    
    const projects = [
        { id: 1, name: 'Deep Fake Detection System', description: 'Ongoing project for deepfake detection.' },
        { id: 2, name: 'Slot Machine', description: 'A fun Python project simulating a slot machine.' },
        
    ];
    res.json(projects);
});

app.get('/api/blogs', (req, res) => {
 
    const blogs = [
        { id: 1, title: 'My First Blog Post', content: 'Content of the first blog post.' },
        
    ];
    res.json(blogs);
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
