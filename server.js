// server.js

const express = require('express');
const mysql = require('mysql2');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Configuration de la connexion MySQL
const db = mysql.createConnection({
  host: 'localhost',          // Adresse de votre serveur MySQL
  user: 'draak',  // Nom d'utilisateur MySQL
  password: 'draakpassword', // Mot de passe MySQL
  database: 'draakdb' // Nom de la base de données
});

// Connexion à MySQL
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
    return;
  }
  console.log('Connecté à la base de données MySQL.');
});

// Middleware pour servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Route principale qui sert la page HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route pour récupérer des données depuis la base de données
app.get('/data', (req, res) => {
  // Exemple de requête SQL : adapter en fonction de votre table
  const query = 'SELECT * FROM votre_table LIMIT 10';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Erreur lors de la récupération des données:', err);
      res.status(500).json({ error: 'Erreur de serveur' });
      return;
    }
    res.json(results);
  });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
