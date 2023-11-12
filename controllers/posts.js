// importo l'array
const mieiPosts = require("../db/listaPosts.json");

function index(req, res) {
    res.format({
        html: () => {
            const html = [`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
            <h1>Lista dei miei Posts</h1>`];

            html.push("<ul>");

            for (const post of mieiPosts) {
                html.push(`<li>
                    <h3>${post.titolo}</h3>
                    <p>${post.contenuto}<p>
                    <img src="/imgs/simpsons/${post.immagine}" alt="" style="width: 150px">
                    <ul>
                    <b>Tags:</b>`);

                for (const tag of post.tags) {
                    html.push(`<li>${tag}</li>`);
                }

                html.push(`</ul>
                </li>`);
            }

            html.push("</ul>");

            res.send(html.join(""));
        },
        json: () => {
            res.type("json").send({
                totalPosts: mieiPosts.length,
                list: mieiPosts
            });
        }
    })
}

// esporto la funzione:

module.exports = {
    index,
}