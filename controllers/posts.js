function index(req, res) {
    res.send("Lista dei miei posts");
}

// esporto la funzione:

module.exports = {
    index,
}