const sequence = {
    _id: 1,
    get id(){ return this._id++}
}

const produtos ={}

function salvarProdutos(produto){
    if(!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function geProduto(id){
    return produtos[id] || {}
}
