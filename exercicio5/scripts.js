const divResult = document.getElementById('resultado')
const selectOfAdicionados = document.getElementById('adicionados')

const btnAdicionar = document.getElementById('adicionar')
const btnFinalizar = document.getElementById('finalizar')

let arrayNumeros = []

function adicionar() {
    const OptionsOfAdicionados = document.createElement('option')

    let numero = document.getElementById('numero')

    OptionsOfAdicionados.text = `O número ${Number(numero.value)} foi adicionado.`
    selectOfAdicionados.append(OptionsOfAdicionados)
    
    arrayNumeros.push(Number(numero.value))
}

function finalizar(){
    const total = arrayNumeros.length

    const maior = Math.max(...arrayNumeros)
    const menor = Math.min(...arrayNumeros)

    let soma = 0
    
    arrayNumeros.forEach(numero => {
        soma += numero
    });
    
    const media = soma / total

    const pTotal = document.createElement('p')
    const pMaior = document.createElement('p')
    const pMenor = document.createElement('p')
    const pSoma = document.createElement('p')
    const pMedia = document.createElement('p')

    pTotal.textContent = `O total de números adicionados foi ${total}`
    pMaior.textContent = `O maior número adicionado foi ${maior}`
    pMenor.textContent = `O menor número adicionado foi ${menor}`
    pSoma.textContent = `A soma dos números adicionados foi ${soma}`
    pMedia.textContent = `A média dos números adicionados foi ${media}`

    divResult.appendChild(pTotal)
    divResult.appendChild(pMaior)
    divResult.appendChild(pMenor)
    divResult.appendChild(pSoma)
    divResult.appendChild(pMedia)
}

btnAdicionar.onclick = adicionar
btnFinalizar.onclick = finalizar