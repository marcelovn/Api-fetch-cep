let cep = document.querySelector('#cep')

function buscarCep() {
    if (cep.value === '') {
        console.log('aqui')
    } else {
        getCep(cep.value)
    }
}

function limparCep() {
    let p = document.querySelectorAll('p')
    p.forEach((v) => v.innerText = '')
    cep.value = ''
}

async function getCep(cep) {
    return await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((data) => data.json())
        .then((json) => {
            for (const key in json) {
                if (Object.hasOwnProperty.call(json, key)) {
                    let body = document.querySelector('body')
                    let p = document.createElement('p')

                    body.appendChild(p)

                    p.innerText = json[key]
                }
            }
        })
}
