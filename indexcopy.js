// ***************************************************************************
// Bank API code from Web Dev For Beginners project
// https://github.com/microsoft/Web-Dev-For-Beginners/tree/main/7-bank-project/api
// ***************************************************************************

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const fs = require('fs');

// App constants
const port = process.env.PORT || 3000;
// Create the Express app & setup middlewares
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//app.use(cors());

// ***************************************************************************

// Configure routes
const router = express.Router();

// Hello World for index page
app.post('/', function (req, res) {
    return res.send("Hello World!");
})

app.get('/img', function (req, res) {
  // Assuming the file you saved earlier is named 'data.json'
  const filePath = 'data.json';

  // Read the file from disk
  fs.readFile(filePath, 'utf8', function (err, data) {
      if (err) {
          console.error('Error reading file:', err);
          return res.status(500).send('Error reading file.');
      }

      // Parse the JSON data
      const jsonData = JSON.parse(data);

      // Send the JSON data as response
      return res.json(jsonData);
  });
});

app.post('/img', upload.single('image'), (req, res) => {
  // Access the uploaded image data
  const imageBuffer = req.file.buffer;
  console.log("Bild")
  console.log(imageBuffer);
  // Process the image data as needed (e.g., save to disk, process, etc.)
  // Here, you could save the image to disk, process it, or do any other operation
  // For simplicity, let's just send back a success response with the image size
  res.json({ success: true, imageSize: imageBuffer.length });
});

// app.post('/img', function (req, res) {
//   // Get JSON data from request body
//   const jsonData = req.body;

//   // Assuming you want to save the JSON data to a file named 'data.json'
//   const filePath = 'data.json';

//   // Write the JSON data to the file
//   fs.writeFile(filePath, JSON.stringify(jsonData), 'utf8', function (err) {
//       if (err) {
//           console.error('Error saving JSON data to file:', err);
//           return res.status(500).send('Error saving JSON data to file.');
//       }
//       console.log('JSON data saved to file:', filePath);
//       return res.send('JSON data saved successfully.');
//   });
// });


app.delete('/img/:id', function (req, res) {
  return res.send("Fabrikam Bank API");
})

app.delete('/imga', function (req, res) {
  return res.send("Fabrikam Bank API");
})

// Start the server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
  
