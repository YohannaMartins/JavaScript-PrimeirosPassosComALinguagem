console.log(`\n Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 21;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "São Paulo";

console.log("\n Destinos possíveis:");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;

//while(contador<3){
//    if(listaDeDestinos[contador] == destino){
//        destinoExiste = true;
//        break;
//    }else{
//        destinoExiste = false;
//    }
//    contador += 1;
//}

for(let cont = 0; cont < 3; cont ++){
    if(listaDeDestinos[cont] == destino){
        destinoExiste = true;
    }
}

console.log("Destino existe: ", destinoExiste)

if(podeComprar && destinoExiste){
    console.log("Boa Viagem");
}else{
    console.log("Desculpe, tivemos um erro!");
}


