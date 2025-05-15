const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => res.send("Olá, mundo com Docker!"))

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))
