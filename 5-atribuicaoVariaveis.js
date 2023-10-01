console.log("Trabalhando com atribuição de variáveis");

const idade1 = 20;
const nome1 = "Yohanna";
const sobrenome1 = "Martins";

console.log(nome1 + sobrenome1);
console.log(nome1 + " " + sobrenome1);
console.log(nome1, sobrenome1);
console.log(`Meu nome é ${nome1} ${sobrenome1}`);

//nome1 = nome1 + sobrenome1; erro, pois nome1 é uma constante

let nome2 = "Yohanna"; //não é uma constante, pode ser mudada
let sobrenome2 = "Martins";
nome2 = nome2 + sobrenome2;

console.log(nome2);

let idade; //declarando variável
idade = 20; //atribuindo valor
idade = idade + 1;
console.log(idade);