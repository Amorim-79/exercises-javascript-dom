const buttonVerify = document.getElementsByTagName('button')[0]
const divResult = document.getElementById('result')

function verify() {

    const date = new Date()
    const currentYear = date.getFullYear()
    const inputYear = document.getElementById('nasc')
    var age

    const sexMasc = document.getElementById('masc')

    const p = document.createElement('p')
    const img = document.createElement('img')

    if (inputYear.value.length == 0 || Number(inputYear.value) > currentYear) {
        return alert('Data inválida!')
    } else {
           age = currentYear - Number(inputYear.value)  
    }

    if (sexMasc.checked) { 
        p.textContent = `Um homem de ${age} anos`
        if (age >= 60) {
            img.setAttribute('src', './images/exec_homem_velho.jpg')
        } else {
            img.setAttribute('src', './images/exec_homem_novo.jpg')
        }
    } else {
        p.textContent = `Uma mulher de ${age} anos`
        if (age >= 60) {
            img.setAttribute('src', './images/exec_mulher_velha.jpg')
        } else {
            img.setAttribute('src', './images/exec_mulher_nova.jpg')
        }
    }

    divResult.innerHTML = `<p>${p.textContent}</p>`
    divResult.appendChild(img)
}

buttonVerify.onclick = verify