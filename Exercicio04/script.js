function tabuada(){

const numtxt  = document.getElementById('num').value;
const num = Number(numtxt);
const tabuadatxt = document.getElementById('tabuada');
tabuadatxt.innerHTML = ''

if (num == 0) {
    alert('Por favor, digite um número diferente de zero!');
    return;
}

for(let i = 1; i <= 10; i++){
    const resultado = num * i;
    const option = document.createElement('option');
    option.text = `${num} x ${i} = ${resultado}`;
    tabuadatxt.appendChild(option);

} 

}