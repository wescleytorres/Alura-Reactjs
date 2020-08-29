
const listarClientes = () => {
    return fetch("http://localhost:4000/clientes")
    .then( resposta => {
        return resposta.json()
    })
    .then( json => {
        return json
    })
}

const cadastrarClientes = (nome, cpf) => {
    const json = JSON.stringify({
        "nome": nome,
        "cpf": cpf
    })
    return fetch("http://localhost:4000/clientes/cliente", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: json
    })
    .then(resp => {
        return JSON.stringify(resp.body) 
    })
}

const deletarCliente = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`,
    {
        method: "DELETE"
    })
}

const detalhaCliente = id => {
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, 
    {
        method: "GET"
    })
    .then( resposta => {
        return resposta.json()
    })
}

const editaCliente = (id, cpf, nome) => {
    const json = JSON.stringify({
        "nome": nome,
        "cpf": cpf
    })
    return fetch(`http://localhost:4000/clientes/cliente/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: json
    })
}