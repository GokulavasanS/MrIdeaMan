// server.js

const express = require('express');
const app = express();
const path = require('path');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));


// Render each menu item using EJS
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/resume', (req, res) => {
  res.render('resume');
});

app.get('/projects', (req, res) => {
  res.render('projects');
});

app.get('/certifications', (req, res) => {
  res.render('certifications');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Start the server
const port = process.env.PORT || 3003;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
