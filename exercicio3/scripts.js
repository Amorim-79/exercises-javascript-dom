const divResult = document.getElementById('result')
const buttonResult = document.getElementsByTagName('button')[0]

const inputInicio = document.getElementById('inicio')
const inputFim = document.getElementById('fim')
const inputPassos = document.getElementById('passos')

function contar() {

    let inicio = Number(inputInicio.value)
    let fim = Number(inputFim.value)
    let passos = Number(inputPassos.value)
    let numeros = []

    for (inicio; inicio <= fim; inicio += passos) {
        numeros.push(inicio)
    }
    const textNumeros = `${numeros}`
    const textNumerosFormated = textNumeros.replace(/,/gi, ' &#x1F449; ')
    divResult.innerHTML = `<p>Contando: ${textNumerosFormated}</p>`
}

buttonResult.onclick = contar