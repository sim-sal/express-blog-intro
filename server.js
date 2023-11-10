// IMPORTAZIONI
// express
const express = require('express');
//dotenv
const dotenv = require('dotenv').config();
// controller
const postsController = require("./controllers/posts");

// creiamo l'istanza di express
const app = express();

// configuro i file statici
app.use(express.static("public"));

// usiamo la nostra istanza per definire le rotte
app.get("/", (req, res) => {
    res.send("<h1>Benvenuto nel mio blog!</h1>");
})

app.get("/posts", postsController.index);

// avviamo il nostro server mettendolo in ascolto
app.listen(process.env.PORT || 3001, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`);
})