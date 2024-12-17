const express = require('express');
const app = express();

// Middleware pour gérer le parsing du JSON
app.use(express.json());

// Route de test
app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

// Démarrage du serveur sur le port 8080
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
