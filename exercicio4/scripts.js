const selectResultado = document.getElementById('resultado')
const btnResultado = document.getElementsByTagName('button')[0]
const inputNumero = document.getElementById('numero')

function gerar() {
    const numero = Number(inputNumero.value)
    let resultado = []

    if (inputNumero.value.length == 0) {
        alert('Insira um número')
    } else {
        selectResultado.innerHTML = ''

        for (i = 0; i <= 10; i++) {
            const optionResult = document.createElement('option')
            optionResult.textContent = `${numero} x ${i} = ${numero * i}`
            selectResultado.appendChild(optionResult)
        }

        
    }
}

btnResultado.onclick = gerar