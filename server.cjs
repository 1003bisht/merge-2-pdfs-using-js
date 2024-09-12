// server.cjs
const express = require('express');
const path = require('path');
const mergepdfs = require('./merge.cjs');

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/merge', async (req, res) => {
    try {
        await mergepdfs('public/first.pdf', 'public/second.pdf'); // Adjust paths to your actual PDF files
        res.send('PDFs merged successfully! You can download it <a href="/static/merged.pdf">here</a>.');
    } catch (error) {
        res.status(500).send('Error merging PDFs: ' + error.message);
    }
});



app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
