let body = document.querySelector('body')
let img = document.getElementById("portifolio")
let fotoGif = document.querySelectorAll('.fotoGif')
let contateMe = document.querySelector('.contateMe') 
const url = './form/faleComigo.html' //caminho

fotoGif.forEach((e, index) => {
    let imagem = document.createElement('img') 
    imagem.classList.add('previa')
    imagem.id = 'portifolio'
    e.appendChild(imagem)
    imagem.src = `./img/projetos/projeto${index + 1}.png`
})

contateMe.onclick = e => {
    e.preventDefault()
    fetch(url)
        .then(resp => resp.text()) // converte json em objeto
        .then(html => body.innerHTML = html) 
}
