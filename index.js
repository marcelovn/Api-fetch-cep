let cep = document.querySelector('#cep')

function buscarCep() {
    if (cep.value !== '') {

        let novoCep = cep.value.replace('-', '')

        let reg = /^[0-9]{8}$/
        console.log(reg.test(novoCep))

        if (reg.test(novoCep)) {
            console.log('Passou')
            requestCep(novoCep)
        } else {
            console.log('Não passou')
        }

    } else {
        console.log('Aqui')
    }
}

function limparCep() {
    let p = document.querySelectorAll('p')
    p.forEach((v) => v.innerText = '')
    cep.value = ''
}

async function requestCep(cep) {
    return await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((resp) => {

            if (!resp.ok) {
                throw new Error(`HTTP error: ${resp.status}`);
            }

            console.log('Resposta http ok', resp.status)
            return resp.json()
        })
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
