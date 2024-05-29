const listaDeDestinos = new Array(
    'São Paulo',
    'Rio de Janeiro',
    'salvador',
);

const idadeComprador = 15;
const estaAcompanhada = true;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1);
} else if (estaAcompanhada == true) {
    console.log("Comprador menor de idade, mas está acompanhada");
    listaDeDestinos.splice(1, 1);
} else {
    console.log("Comprador menor de idade");
}-
console.log(listaDeDestinos)