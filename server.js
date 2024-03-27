const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, './assets/css/style.css')));


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    
    });

    app.get('/alperen', (req, res) => {
        res.sendFile(path.join(__dirname, 'index.html'));
        
        });