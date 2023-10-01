console.log(`Trabalhando com Listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

// console.log("Destinos possíveis:");
// console.log(salvador, saoPaulo, rioDeJaneiro);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`); //adicionando um item na lista
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); //deleta um item a partir da posição 1.
console.log(listaDeDestinos);
console.log(listaDeDestinos[1]);//mostrando um único elemento (o elemento que está na posição 1)