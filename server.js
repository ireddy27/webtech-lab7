const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3001;

const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))
// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, 'build')));

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());

// API endpoint to handle form submissions
app.post('/api/submitReservation', (req, res) => {
  const formData = req.body;

  // For demonstration purposes, logging the form data to the console
  console.log('Form Data Received:', formData);

  // Send a response to the client
  res.json({ message: 'Form submitted successfully!' });
});

// API endpoint for other data
app.get('/api/data', (req, res) => {
  // Replace this with your actual API logic
  res.json({ message: 'API data response' });
});

// React app route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Handle any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
