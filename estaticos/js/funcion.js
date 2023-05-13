const cuerpo = document.querySelector('body')
const titulo = document.querySelector('h1')

function cambiarColor(codigo){
    cuerpo.style.backgroundColor = codigo;
    titulo.style.color = 'white'
    titulo.style.textShadow = '2px 2px 0 black'
    titulo.innerHTML = codigo
}

cambiarColor('#fabada')