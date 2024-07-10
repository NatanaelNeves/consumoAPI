async function buscarProduto(id){

    let resposta = await fetch(`https://fakestoreapi.com/products/${id}`)

    let produto = await resposta.json()

    return produto
}

async function mostrarNoConsole(funcaoAssincrona, id){
    let produto = await funcaoAssincrona(id)
    console.log(produto)
}

console.log(buscarProduto(1))
mostrarNoConsole(buscarProduto, 1)

