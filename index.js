import express from 'express';
import { buscarUfs, buscarUfPorId, buscarUfsPorNome } from './servicos/servicos.jsca' ;

const app = express();

app.get('/ufs', (req, res) => {
  const nomeUf = req.query.busca;
  const resultado = nomeUf ? buscarUfsPorNome(nomeUf) : buscarUfs();
  if (resultado.length > 0) {
      res.json(resultado);
  } else {
      res.status(404).send({ "erro": "Nenhuma UF encontrada" });
  }
});

app.get('/ufs/:iduf', (req, res) => {
  const uf = buscarUfPorId(req.params.iduf);

  if (uf) {
      res.json(uf);
  } else if (isNaN(parseInt(req.params.iduf))) {
      res.status(400).send({ "erro": "Requisição inválida" });
  } else {
      res.status(404).send({ "erro": "UF não encontrada" });
  }
});

app.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080');
});


/*
app.get("/ufs/:idUf", (req, res) => {
    const idUF = parseInt(req.params.idUf);
    let mensagemErro = '';
    let uf;

    if (!isNaN(idUF)) {
        uf = colecaoUf.colecaoUffind(u => u.id === idUF);
        if (!uf) {
            mensagemErro = 'UF não encontrada';
        }
    } else {
        mensagemErro = 'Requisição inválida';
    }

    if (uf) {
        res.json(uf);
    } else {
        res.status(404).json({ "erro": mensagemErro });
    }
});


*/

