console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15;
const estaAcompanhada = false;
const temPassagemComprada = true;

console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idade")
//     listaDeDestinos.splice(1, 1); //removendo item
// } else {
//     //a pessoa é menor de idade
//     if (estaAcompanhada) {
//         //está acompanhada
//         console.log("Comprador está acompanhado")
//         listaDeDestinos.splice(1, 1); //removendo item
//     } else {
//         //não está acompanhada
//         console.log("Não é maior de idade e não posso vender")
//     }
// }

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Boa viagem")
    listaDeDestinos.splice(1, 1); //removendo item
} else {
        console.log("Não é maior de idade e não posso vender")
    }

console.log(listaDeDestinos);

console.log("Embarque: \n\n")
if (idadeComprador >= 18 && temPassagemComprada){
    console.log("Boa viagem");
}else{
    console.log("Você não pode embarcar");
}

// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);