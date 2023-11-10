// importo l'array
const mieiPosts = require("../db/listaPosts.json");

function index(req, res) {
    res.send("Lista dei miei posts");
}

// esporto la funzione:

module.exports = {
    index,
}