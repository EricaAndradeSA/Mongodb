const app = require ('./src/config/server');
const connection = require ('./src/config/connection');
const comentarios = require ('./src/models/comentarios');

app.get("/", async(req, res) => {
    const resultado = await comentarios.find()
    res.json(resultado)
})

app.post("/", async(req, res) => {
    const {nome, email, mensagem} = req.body
    let resultado = await comentarios.create({nome, email, mensagem})

    res.json(resultado)
})