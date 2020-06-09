const body = document.body

const div = document.getElementById('main')
const title = document.getElementsByTagName('h1')[0]

const img = document.createElement('img')
const pHora = document.createElement('p')

const date = new Date()
const time = date.getHours()
pHora.textContent = `Agora são ${time} horas.`


if (time >= 7 && time <= 11) {
    img.src = "./images/execManha.jpg"
} else if(time >= 12 && time <= 17) {
    img.src = "./images/execTarde.jpg"
    body.style.backgroundColor = "#CCC"
}else {
    img.src = "./images/execNoite.jpg"
    body.style.backgroundColor = "#333"
    title.style.color = "#FFF"
}

div.append(pHora)
div.append(img)
