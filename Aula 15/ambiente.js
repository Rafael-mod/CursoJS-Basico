let num = [ 8,4,9,2,5,7, 12, 48 ];
num.sort(function(a, b) {
    return a - b;});
  console.log(`Seu vetor é ${num}`)


for (let i = 0; i < num.length; i++) {
    console.log(`O número  na posição ${i} é ${num[i]}`);
}

for( let i in num ) {
    console.log(`O número  na posição ${i} é ${num[i]}`);
}

console.log(`o número 7 fica na posição ${num.indexOf(7)}`) 