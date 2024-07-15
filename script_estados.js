const div = document.getElementById('estados-brasil')

async function carregarDados(){
    const response = await fetch('../db/estados.json')

    const dados = await response.json()

    const estados = dados.estados

    console.log(response)
    console.log(dados.estados)

    // if(response.status)

    estados.map((estado) => {
        console.log(estado.nome)
        let h3 = document.createElement("h3")
        h3.textContent = estado.nome

        let p = document.createElement('p')
        p.textContent = estado.descricao

        let clima = document.createElement('p')
        clima.textContent = estado.clima

        let habitantes = document.createElement('p')
        habitantes.textContent = `Habitantes: ${estado.descricao}`

        let bandeira = document.createElement('img')
        bandeira.setAttribute('src', estado.bandeira_url)
        bandeira.setAttribute('width', '100px')

        let mapa = document.createElement('img')
        mapa.setAttribute('src', estado.mapa_url)
        mapa.setAttribute('width', '200px')

        let quebra_linha = document.createElement('br')
        // innerHTML

        div.appendChild(h3)
        div.appendChild(p)
        div.appendChild(clima)
        div.appendChild(habitantes)
        div.appendChild(bandeira)
        div.appendChild(quebra_linha)
        div.appendChild(mapa)
    })
}

carregarDados()