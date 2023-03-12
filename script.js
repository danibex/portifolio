let img = document.getElementById("portifolio")
let fotoGif = document.querySelectorAll('.fotoGif')


fotoGif.forEach((e, index) => {
    let imagem = document.createElement('img') 
    imagem.classList.add('previa')
    imagem.id = 'portifolio'
    e.appendChild(imagem)
    imagem.src = `./img/projetos/projeto${index + 1}.png`
})
