// importo express
const express = require('express');

// importo e avvio dotenv
const dotenv = require('dotenv').config();

// creiamo l'istanza di express
const app = express();

// usiamo la nostra istanza per creare la rotta principale
app.get("/", (req, res) => {
    res.send("<h1>Hello Express!</h1>");
})

// avviamo il nostro server mettendolo in ascolto
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
})