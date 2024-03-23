var express = require('express')
var cors = require('cors')
var app = express()
const fs = require('fs');
const multer  = require('multer');
const path = require('path'); // Import the path module

app.use(cors())

// Set up Multer to handle file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      // Specify the directory where uploaded files will be stored
      const uploadDir = './uploads';
      if (!fs.existsSync(uploadDir)) {
          fs.mkdirSync(uploadDir);
      }
      cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
      // Generate a unique filename for the uploaded file
      cb(null, Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Define route to handle file upload
app.post('/upload', upload.single('image'), (req, res) => {
  if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
  }

  // File uploaded successfully
  res.status(200).json({ message: 'File uploaded successfully' });
});


app.get('/', function (req, res) {
  return res.send("Hello World!");
})

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})
