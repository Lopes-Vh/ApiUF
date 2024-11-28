const express = require('express');
const colecaoUF = require('./Dados/dados.js');

const app = express();
app.get('/ufs/:iduf', (req, res) =>{
    const iduf = parseInt(req.params.iduf);
    let mensagemErro = '';
    let uf;

    if (!(isNaN(iduf))){
        uf = colecaoUF.colecaoUf.find(u => u.id === iduf);
        if (!uf){
            mensagemErro = 'UF não encontrada!'
        }
    } else{
        mensagemErro = 'Requisição inválida!'
    }

    if (uf){
        res.json(uf);
    } else{
        res.status(404).json({"Erro": mensagemErro})
    }
})
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080")
})