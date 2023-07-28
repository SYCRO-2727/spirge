//api client-side file reading script if necessary
//set file to filepath
// pages/api/readFile.js
const fs = require('fs');
const path = require('path');

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end(); // Method Not Allowed
  }

  const { filepath } = req.query;

  if (!filepath) {
    return res.status(400).json({ error: 'Please provide a filepath query parameter.' });
  }

  const filePath = path.join(process.cwd(), filepath);

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'Error reading the file.' });
    } else {
      res.status(200).json({ content: data });
    }
  });
}