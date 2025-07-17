const agora = new Date()
const hora = agora.getHours()
const minutos = agora.getMinutes()
let dia = agora.getDay()
switch (dia){
    case 0:
        dia = 'Domingo'
        break
    case 1:
        dia = 'Segunda'
        break
    case 2:
        dia = 'Terça'
        break
    case 3:
        dia = 'Quarta'
        break
    case 4:
        dia = 'Quinta'
        break        
    case 5:
        dia = 'Sexta'
        break
    case 6:
        dia = 'Sabádo'
        break
    default:
        console.log('Erro: Dia inválido')
}

console.log(`Hoje é ${dia} e agora são exatamaente ${hora} horas e ${minutos} minutos`)

    if(hora < 12){
    console.log('Bom dia!')
} else if (hora <= 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}





