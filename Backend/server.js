const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

const dataFilePath = path.join(__dirname, 'data');

// Middleware
app.use(cors());
app.use(bodyParser.json());

const readData = () => {
    try {
        const data = fs.readFileSync(path.join(dataFilePath, "experiences.json"), 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading JSON file:', error);
        return [];
    }
};

//I don't plan to use this for now but at least it's here
/*const writeData = (data) => {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), 'utf8');
    } catch (error) {
        console.error('Error writing JSON file:', error);
    }
};*/

app.get('/cv', (req, res) => {
    const filePath = path.join(dataFilePath, 'Killian_Gricourt_CV.pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="Killian_Gricourt_CV.pdf"');
    res.sendFile(filePath, (err) => {
        if (err) {
            console.error(err);
            res.status(500).send('Erreur lors du téléchargement du CV');
        }
    });
});

app.get('/experiences', (req, res) => {
    const experiences = readData();
    res.status(200).json(experiences);
});

app.get('/stayingalive', (req, res) => {
    res.status(200).send("Staying alive");
});

app.use('/images', express.static(path.join(dataFilePath, 'images')));


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


setInterval(() => {
    axios.get('https://killiangricourt-github-io.onrender.com/stayingalive')
        .then(() => {
            console.log("Staying alive response from server");
        })
        .catch(error => {
            console.error(error);
        });
}, 40000)