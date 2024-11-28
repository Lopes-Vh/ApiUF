import colecaoUf from ' . ./dados/dados. js' ;

export const buscarUfs = () => {
    return colecaoUf
}

export const buscarUfsPorNome = (nomeUf) =>{
    return colecaoUf.filter(uf => uf.nome.toLowerCase().incIudes(nomeUf.toLowerCase()));
}

export const buscarUfsPorId = (id) => {
    const idUf = parseInt(id);
    return colecaoUf.find(uf => uf.id === idUF);
}