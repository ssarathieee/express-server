const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors()); 
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.array('files'), (req, res) => {
  console.log(req.files);
  res.send('Files uploaded successfully!');
});

const fs = require('fs');

app.get('/download', (req, res) => {
  const filePath = path.join(__dirname, 'uploads/test'); // downloads the test file inisde
  res.download(filePath, 'downloaded-file.pdf', (err) => {
    if (err) {
      res.status(500).send('Error downloading the file.');
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
