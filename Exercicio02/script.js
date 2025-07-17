function verificar(){
    const data = new Date
    const ano = data.getFullYear()
    const fano = document.getElementById('txtano')
    const anonasc = Number(fano.value)
    const res = document.getElementById('res')

    if (anonasc == 0 || anonasc > ano){
        window.alert('ERRO! Verifique os dados e tente novamente')

    } else{
        const fsex = document.getElementsByName('radsex')
        const idade = ano - anonasc
        const img = document.createElement('img')
        img.setAttribute('id', 'img');
        let genero = ''
        if (fsex[0].checked){
            genero = 'masculino'
            if( idade > 0 && idade <= 10){
                //CRIANÇA
                img.setAttribute('src', 'imagens/homemcrianca.jpg')
            } else if( idade > 10 && idade <= 20){
                //ADOLESCENTE
                img.setAttribute('src', 'imagens/homemjovem.jpg')
            } else if( idade > 20 && idade <= 60){
                //ADULTO
                img.setAttribute('src', 'imagens/homemadulto.jpg')
            } else{
                //IDOSO
                img.setAttribute('src', 'imagens/homemidoso.jpg')
            }
                
        } else{
            genero = 'feminino'
            if( idade > 0 && idade <= 10){
                //CRIANÇA
                img.setAttribute( 'src', 'imagens/mulhercrianca.jpg')
            } else if( idade > 10 && idade <= 20){
                //ADOLESCENTE
                img.setAttribute( 'src', 'imagens/mulherjovem.jpg')
            } else if( idade > 20 && idade <= 60){
                //ADULTO
                img.setAttribute( 'src', 'imagens/mulheradulta.jpg')
            } else{
                //IDOSO
                img.setAttribute( 'src', 'imagens/mulheridosa.jpg')
            }
        }
        res.innerHTML = `Você tem ${idade} anos de idade e é do gênero ${genero}`
        res.appendChild(img)
    }


}

//imagem.src