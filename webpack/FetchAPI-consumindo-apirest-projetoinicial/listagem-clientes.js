
const removeCliente = id => {
    if(confirm("Deseja deletar o cliente?")) {
        deletarCliente(id).then( resposta =>
            {
                if (resposta.status === 200) {
                    document.location.reload()
                }
            })
    }
}

// a const vai receber a tabela que esta em HTML
const corpoTabela = document.querySelector("[data-conteudo-tabela]")

// a funcao vai pegar os 2 parametros (os valores da array)
const exibirCliente = (cpf, nome, id) => {
    // a const linha vai criar o elemento TR em HTML
    const linha = document.createElement('tr')
    // usando o template , a const vai passar os 2 params pra HTML
    const conteudoLinha = 
    `
    <td>${cpf}</td>
    <td>${nome}</td>   
    <button type="button" class="btn btn-danger" onclick="removeCliente(${id})">Excluir</button>
    <a href="edita-clientes.html?id=${id}">
    <button type="button" class="btn btn-info">Editar</button>
    </a>
    `
    // a const linha agora com elemento 'TR' vai receber os valores em 'td'
    linha.innerHTML = conteudoLinha
    return linha
}


listarClientes().then(exibe => {
    exibe.forEach(indece => {
        corpoTabela.appendChild(exibirCliente(indece.cpf, indece.nome, indece.id))
    })

})

