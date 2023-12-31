// importo l'array
const mieiPosts = require("../db/listaPosts.json");

function index(req, res) {
    res.format({
        html: () => {
            const html = [`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
            <h1 class="text-center">Lista dei miei Posts</h1>`];

            html.push('<div class="container"><div class="row justify-content-center">');

            for (const post of mieiPosts) {
                html.push(`<div class="col-3 card border-dark my-5 mx-5">
                    <h3 class="text-center">${post.titolo}</h3>
                    <img src="/imgs/simpsons/${post.immagine}" alt="" style="width: 150px">
                    <p>${post.contenuto}<p>
                    <ul>
                    <b>Tags:</b>`);

                for (const tag of post.tags) {
                    html.push(`<li>${tag}</li>`);
                }

                html.push(`</ul>
                </div>`);
            }

            html.push("</div></div>");

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