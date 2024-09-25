# Overview of the Project

## Portfolio Website

### Objective
The Portfolio Website is designed to showcase the skills, projects, and experiences of me, I am Pushpraj Singh Rajput, a 3rd-year computer science student. This website provides a user-friendly interface for visitors to learn more about me and explore various projects, blog posts, and contact information.

### Key Activities
- **About Me Section**: Provides a brief introduction to me, highlighting academic background, interests, and current projects.
- **Projects Section**: Displays ongoing and completed projects, including detailed descriptions of the Deep Fake Detection System and a Slot Machine game developed in Python.
- **Blog Section**: Features a simple blog application where users can create, edit, and delete posts, allowing for engagement and sharing of thoughts.
- **Contact Section**: Offers a way for visitors to get in touch via email, enhancing networking opportunities.
- **Navigation**: Implements a clear and intuitive navigation menu for seamless access to different sections of the portfolio.

### Technologies Used
- **HTML/CSS**: For structuring and styling the web pages, ensuring a visually appealing layout.
- **JavaScript**: To handle client-side interactions, such as fetching and displaying blog posts dynamically.
- **Node.js**: For server-side logic, managing API requests and serving the web application.
- **Express.js**: A web application framework for Node.js that simplifies the setup of the server and routing.
- **EJS**: A templating engine for rendering dynamic HTML pages based on data passed from the server.
- **MongoDB**: A NoSQL database used for storing blog posts and user data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB that facilitates the modeling of application data.
- **dotenv**: A module for loading environment variables from a .env file, keeping sensitive information secure.
- **CORS**: A middleware that enables cross-origin resource sharing, allowing for communication between the frontend and backend.
- **Body-Parser**: Middleware for parsing incoming request bodies, making it easier to handle form submissions and JSON data.

### Code Structure
- **app.js**: Main server file that sets up the Express application, connects to MongoDB, and defines API routes.
- **index.js**: Entry point for the backend application, handling API requests for projects and blog posts.
- **Views**: Dynamic HTML pages rendered using EJS, providing content for the portfolio.
- **style.css**: Stylesheet for the application, defining the look and feel of the portfolio website.
- **.env**: Contains environment variables, including the MongoDB connection URI for secure database access
