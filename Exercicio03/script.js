function Contar(){ 

const num1txt = document.getElementById("num");
const inicio = Number(num1txt.value)
const num2txt = document.getElementById("numfim");
const fim = Number(num2txt.value);
const passotxt = document.getElementById("numpassos");
let passo = Number(passotxt.value);
const restxt = document.getElementById("resposta");
let resultado = ''

if (passo <= 0) {
    alert('Passo inválido! Considerando passo 1');
    passo = 1;
}

(inicio < fim || inicio < 0 || fim < 0) ? alert('Dados válidos') : alert('Dados inválidos');
for (let i = inicio; i <= fim; i+=passo){
        if (i == fim){
            resultado += `${i}🏁`;
        } else {
            resultado += `${i} 👉 `;
        }
}restxt.innerHTML = `Contando de ${inicio} até ${fim}: <br> 👉${resultado} `;

} 
