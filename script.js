function toggleMode() {
    // pegando o html
    const html = document.documentElement

    // realizando a troca das classes
    html.classList.toggle('light')
    // Se verdadeiro faz o if, se falso faz p else
    // if(html.classList.contains('light')) {
    //     html.classList.remove('light')
    // } else {
    //     html.classList.add('light')
    // }
    
    // pegar a tag img
    const img = document.querySelector("#profile img")
    
    // substituir a imagem
    if(html.classList.contains('light')) {
        // se tiver light mode, adiciona a imagem light
        img.setAttribute('src', './assets/avatar-light.png'),
        img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos de sol e camisa jeans, sem barba e fundo rosa e azul')
    } else {
        // se tiver sem light mode, manter a imagem normal
        img.setAttribute('src', './assets/avatar.png'),
        img.setAttribute('alt', 'Foto de Mayk Brito sorrindo, usando óculos e camisa preta, barba e fundo amarelo.')
    }


}