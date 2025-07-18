function Contar(){ 

const num1txt = document.getElementById("num");
const inicio = Number(num1txt.value)
const num2txt = document.getElementById("numfim");
let fim = Number(num2txt.value);
const restxt = document.getElementById("resposta");
let resultado = ''

if ( fim == 0) {
    alert('Erro! Digite um número válido.')
} else{
for (let i = inicio; i <= fim; i++){
    resultado +=` ${i}`;
} restxt.innerHTML = `Contando de ${inicio} até ${fim}: <br> ${resultado}`;

}

}