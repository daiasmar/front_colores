const cuerpo = document.querySelector('body')
const titulo = document.querySelector('h1')

function cambiarColor(codigo){
    cuerpo.style.backgroundColor = codigo;
    titulo.style.color = 'white'
    titulo.style.textShadow = '2px 2px 0 black'
    titulo.innerHTML = codigo
}

function cambiarHEX(number){
    return number.toString(16)
}

fetch('https://api-colores.vercel.app/')
.then(res => res.json())
.then(({r,g,b}) => {
    cambiarColor(cambiarHEX(`#${[r,g,b].map(num => cambiarHEX(num)).join('')}`))
})