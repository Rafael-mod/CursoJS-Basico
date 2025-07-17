const agora = new Date()
let dia = agora.getDay()
/*
    Domingo =0
    Segunda = 1
    Terça 2 
    Quarta 3
    Quinta 4 
    Sexta 5
    Sabado 6
*/

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

console.log(`Hoje é ${dia}`)