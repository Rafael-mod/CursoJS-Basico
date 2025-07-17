
function carregar(){
const data = new Date()
const hora = data.getHours()

const divhora = window.document.getElementById('hora')
const imagem = window.document.getElementById('img')

divhora.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora <= 12){
    // BOMDIA !
    imagem.src = 'imagens/fotomanha.jpg'
    document.body.style.background = '#feea71'
} else if ( hora <= 18){
    //BOA TARDE!
    imagem.src = 'imagens/fototarde.jpg'
    document.body.style.background = '#ffa746'
} else{
    //BOA NOITE!
    imagem.src = 'imagens/fotonoite.jpg'
    document.body.style.background = '#081c1d'
}
}