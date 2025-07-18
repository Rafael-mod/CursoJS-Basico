function Contar(){ 

const num1txt = document.getElementById("num");
const inicio = Number(num1txt.value)
const num2txt = document.getElementById("numfim");
const fim = Number(num2txt.value);
const restxt = document.getElementById("resposta");
let resultado = ''
const passotxt = document.getElementById("numpassos");
const passo = Number(passotxt.value);

if ( fim == 0) {
    alert('Erro! Digite um número válido.')
} else {
    for (let i = inicio; i <= fim; i+=passo){
        if (i == fim){
            resultado += `${i}🏁`;
        } else {
            resultado += `${i} 👉 `;
        }
}} restxt.innerHTML = `Contando de ${inicio} até ${fim}: <br> 👉${resultado} `;

}